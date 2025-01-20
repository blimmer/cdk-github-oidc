import { Stack } from "aws-cdk-lib";
import { CfnOIDCProvider } from "aws-cdk-lib/aws-iam";
import type { Construct } from "constructs";
import type { IGithubActionsIdentityProvider } from "./IGithubActionsIdentityProvider";

interface GithubActionsIdentityProviderProps {
  /**
   * Pass a list of thumbprints for the GitHub Actions OIDC provider.
   *
   * @default - [d89e3bd43d5d909b47a18977aa9d5ce36cee184c]
   */
  thumbprints?: string[];
}

/**
 * This construct creates an ODIC provider to allow AWS access from Github Actions workflows. You'll need to instantiate
 * this construct once per AWS account.
 *
 * You can import a existing provider using `GithubActionsIdentityProvider.fromAccount`.
 *
 * To create a role that can be assumed by GitHub Actions workflows, use the `GithubActionsRole` construct.
 */
export class GithubActionsIdentityProvider extends CfnOIDCProvider implements IGithubActionsIdentityProvider {
  public static readonly issuer: string = "token.actions.githubusercontent.com";

  /**
   * Retrieve a reference to existing Github OIDC provider in your AWS account.
   * An AWS account can only have single Github OIDC provider configured into it,
   * so internally the reference is made by constructing the ARN from AWS
   * Account ID & Github issuer URL.
   */
  public static fromAccount(scope: Construct): IGithubActionsIdentityProvider {
    const { account, partition } = Stack.of(scope);
    const providerArn = `arn:${partition}:iam::${account}:oidc-provider/${GithubActionsIdentityProvider.issuer}`;
    return { arn: providerArn };
  }

  public readonly arn: string;

  constructor(scope: Construct, id: string, props: GithubActionsIdentityProviderProps = {}) {
    super(scope, id, {
      url: `https://${GithubActionsIdentityProvider.issuer}`,
      clientIdList: ["sts.amazonaws.com"],
      thumbprintList: props.thumbprints ?? ["d89e3bd43d5d909b47a18977aa9d5ce36cee184c"],
    });

    this.arn = this.attrArn;
  }
}
