import { OpenIdConnectPrincipal, OpenIdConnectProvider, Role } from "aws-cdk-lib/aws-iam";
import type { Construct } from "constructs";
import { RoleProps } from "./generated/IamRoleProps";
import { type IGithubActionsIdentityProvider } from "./IGithubActionsIdentityProvider";
import { GithubActionsIdentityProvider } from "./GithubActionsIdentityProvider";

export interface GithubActionsRoleConfiguration {
  /**
   * Reference to the Github Actions OpenID Connect Provider configured in AWS IAM.
   *
   * Either pass an construct defined by `new GithubActionsOidcProvider`
   * or a retrieved reference from `GithubActionsOidcProvider.fromAccount`.
   * There can be only one (per AWS Account).
   */
  readonly provider: IGithubActionsIdentityProvider;
}

export interface GithubActionsRoleProps extends GithubActionsRoleConfiguration, RoleProps {}

export class GithubActionsRole extends Role {
  constructor(scope: Construct, id: string, props: GithubActionsRoleProps) {
    const { provider, ...roleProps } = props;

    super(scope, id, {
      assumedBy: new OpenIdConnectPrincipal(
        // We use the CfnOIDCProvider instead of the OpenIdConnectProvider since it's overly complex
        // See https://github.com/aws/aws-cdk/issues/21197
        // However, the OpenIdConnectPrincipal still expects the L2 OpenIdConnectProvider, so we "import" it here to
        // make TypeScript happy with the types.
        OpenIdConnectProvider.fromOpenIdConnectProviderArn(scope, `GithubActionsOidcProviderImport${id}`, provider.arn),
        {
          // TODO: add filters
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
