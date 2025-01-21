import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { GithubActionsIdentityProvider } from "../src";

describe("GithubActionsIdentityProvider", () => {
  it("creates the proper URL", () => {
    const app = new App();
    const stack = new Stack(app, "TestStack");
    new GithubActionsIdentityProvider(stack, "GithubActionsIdentityProvider");

    Template.fromStack(stack).hasResourceProperties("AWS::IAM::OIDCProvider", {
      Url: "https://token.actions.githubusercontent.com",
    });
  });

  it("uses the proper hardcoded client ID", () => {
    const app = new App();
    const stack = new Stack(app, "TestStack");
    new GithubActionsIdentityProvider(stack, "GithubActionsIdentityProvider");

    Template.fromStack(stack).hasResourceProperties("AWS::IAM::OIDCProvider", {
      ClientIdList: ["sts.amazonaws.com"],
    });
  });

  it("uses a default thumbprint list", () => {
    const app = new App();
    const stack = new Stack(app, "TestStack");
    new GithubActionsIdentityProvider(stack, "GithubActionsIdentityProvider");

    Template.fromStack(stack).hasResourceProperties("AWS::IAM::OIDCProvider", {
      ThumbprintList: ["d89e3bd43d5d909b47a18977aa9d5ce36cee184c"],
    });
  });

  it("can override the thumbprint list", () => {
    const app = new App();
    const stack = new Stack(app, "TestStack");
    new GithubActionsIdentityProvider(stack, "GithubActionsIdentityProvider", {
      thumbprints: ["thumbprint"],
    });

    Template.fromStack(stack).hasResourceProperties("AWS::IAM::OIDCProvider", {
      ThumbprintList: ["thumbprint"],
    });
  });

  it("can import an existing provider", () => {
    const app = new App();
    const stack = new Stack(app, "TestStack", {
      env: { account: "123456789012", region: "us-west-2" },
    });
    const provider = GithubActionsIdentityProvider.fromAccount(stack);

    expect(provider.arn).toEqual(
      `arn:${Stack.of(stack).partition}:iam::123456789012:oidc-provider/token.actions.githubusercontent.com`,
    );
  });

  it("can import an existing provider when the stack is environment agnostic", () => {
    const app = new App();
    const stack = new Stack(app, "TestStack");
    const provider = GithubActionsIdentityProvider.fromAccount(stack);

    expect(provider.arn).toEqual(
      `arn:${Stack.of(stack).partition}:iam::${Stack.of(stack).account}:oidc-provider/token.actions.githubusercontent.com`,
    );
  });

  it("can import an existing provider specifying the account", () => {
    const app = new App();
    const stack = new Stack(app, "TestStack", {
      env: { account: "123456789012", region: "us-west-2" },
    });
    const provider = GithubActionsIdentityProvider.fromAccount(stack, { account: "123456789012" });

    expect(provider.arn).toEqual(
      `arn:${Stack.of(stack).partition}:iam::123456789012:oidc-provider/token.actions.githubusercontent.com`,
    );
  });

  it("can import an existing provider specifying the partition", () => {
    const app = new App();
    const stack = new Stack(app, "TestStack", {
      env: { account: "123456789012", region: "us-west-2" },
    });
    const provider = GithubActionsIdentityProvider.fromAccount(stack, { partition: "aws-cn" });

    expect(provider.arn).toEqual(`arn:aws-cn:iam::123456789012:oidc-provider/token.actions.githubusercontent.com`);
  });
});
