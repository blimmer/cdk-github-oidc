import { OpenIdConnectPrincipal, OpenIdConnectProvider, Role } from "aws-cdk-lib/aws-iam";
import type { Construct } from "constructs";
import type { IGithubActionOidcFilter } from "./filters/IGithubActionOidcFilter";
import { RoleProps } from "./generated/IamRoleProps";
import { GithubActionsIdentityProvider } from "./GithubActionsIdentityProvider";
import { type IGithubActionsIdentityProvider } from "./IGithubActionsIdentityProvider";

export interface GithubActionsRoleConfiguration {
  /**
   * Reference to the Github Actions OpenID Connect Provider configured in AWS IAM.
   *
   * Either pass an construct defined by `new GithubActionsOidcProvider`
   * or a retrieved reference from `GithubActionsOidcProvider.fromAccount`.
   * There can be only one (per AWS Account).
   */
  readonly provider: IGithubActionsIdentityProvider;

  /**
   * Subject filters to apply to the Github Actions OIDC token.
   *
   * This filters restrict which repo/branch/tag/etc. can assume the role. This construct
   * exposes many common filters, but you can also pass a custom filter if you need to.
   *
   * For a basic starting point, you can allow all branches to access the role via:
   *
   * const subjectFilters = [
   *   new BranchFilter({ owner: "my-org", repository: "my-repo", branch: "*" }),
   * ]
   */
  readonly subjectFilters: IGithubActionOidcFilter[];
}

export interface GithubActionsRoleProps extends GithubActionsRoleConfiguration, RoleProps {}

export class GithubActionsRole extends Role {
  constructor(scope: Construct, id: string, props: GithubActionsRoleProps) {
    const { provider, subjectFilters, ...roleProps } = props;

    if (subjectFilters.length === 0) {
      throw new Error(
        "You must provide at least one subject filter. Consider a BranchFilter allowing all (`*`) branches. See the docs for more information: https://github.com/blimmer/cdk-github-oidc/README.md",
      );
    }

    super(scope, id, {
      assumedBy: new OpenIdConnectPrincipal(
        // We use the CfnOIDCProvider instead of the OpenIdConnectProvider since it's overly complex
        // See https://github.com/aws/aws-cdk/issues/21197
        // However, the OpenIdConnectPrincipal still expects the L2 OpenIdConnectProvider, so we "import" it here to
        // make TypeScript happy with the types.
        OpenIdConnectProvider.fromOpenIdConnectProviderArn(scope, `GithubActionsOidcProviderImport${id}`, provider.arn),
        {
          StringLike: {
            [`${GithubActionsIdentityProvider.issuer}:sub`]: subjectFilters.map((filter) => filter.toSubject()),
          },
          StringEquals: {
            // Audience is always sts.amazonaws.com with AWS official Github Action
            // https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services#adding-the-identity-provider-to-aws
            [`${GithubActionsIdentityProvider.issuer}:aud`]: "sts.amazonaws.com",
          },
        },
      ),
      ...roleProps,
    });
  }
}
