import { App, Stack } from "aws-cdk-lib";
import { GithubActionsIdentityProvider } from "../src/GithubActionsIdentityProvider";
import { GithubActionsRole } from "../src/GithubActionsRole";
import { BranchFilter } from "../src/filters/BranchFilter";
import { Template } from "aws-cdk-lib/assertions";

describe("GithubActionsRole", () => {
  it("works with the first-class GithubActionsIdentityProvider class", () => {
    const app = new App();
    const stack = new Stack(app, "Stack");
    const provider = new GithubActionsIdentityProvider(stack, "Provider");
    new GithubActionsRole(stack, "Role", {
      provider,
      subjectFilters: [new BranchFilter({ owner: "my-org", repository: "my-repo", branch: "main" })],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::IAM::Role", {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: "sts:AssumeRoleWithWebIdentity",
            Condition: {
              StringEquals: {
                "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
              },
            },
            Effect: "Allow",
            Principal: {
              Federated: {
                "Fn::GetAtt": ["Provider", "Arn"],
              },
            },
          },
        ],
      },
    });
  });

  it("works using an imported provider", () => {
    const app = new App();
    const stack = new Stack(app, "Stack");
    const provider = GithubActionsIdentityProvider.fromAccount(stack, { account: "123456789012", partition: "aws" });
    new GithubActionsRole(stack, "Role", {
      provider,
      subjectFilters: [new BranchFilter({ owner: "my-org", repository: "my-repo", branch: "main" })],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::IAM::Role", {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: "sts:AssumeRoleWithWebIdentity",
            Condition: {
              StringEquals: {
                "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
              },
            },
            Effect: "Allow",
            Principal: { Federated: "arn:aws:iam::123456789012:oidc-provider/token.actions.githubusercontent.com" },
          },
        ],
      },
    });
  });

  it("throws an error if you pass an empty array of filters", () => {
    const app = new App();
    const stack = new Stack(app, "Stack");
    const provider = GithubActionsIdentityProvider.fromAccount(stack, { account: "123456789012", partition: "aws" });
    expect(() => {
      new GithubActionsRole(stack, "Role", { provider, subjectFilters: [] });
    }).toThrow(
      "You must provide at least one subject filter. Consider a BranchFilter allowing all (`*`) branches. See the docs for more information: https://github.com/blimmer/cdk-github-oidc/README.md",
    );
  });

  it("uses StringLike in the subject filter condition when wildcards are present", () => {
    const app = new App();
    const stack = new Stack(app, "Stack");
    const provider = GithubActionsIdentityProvider.fromAccount(stack, { account: "123456789012", partition: "aws" });
    new GithubActionsRole(stack, "Role", {
      provider,
      subjectFilters: [new BranchFilter({ owner: "my-org", repository: "my-repo", branch: "*" })],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::IAM::Role", {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: "sts:AssumeRoleWithWebIdentity",
            Condition: {
              StringLike: {
                "token.actions.githubusercontent.com:sub": ["repo:my-org/my-repo:ref:refs/heads/*"],
              },
              StringEquals: {
                "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
              },
            },
            Effect: "Allow",
            Principal: {
              Federated: "arn:aws:iam::123456789012:oidc-provider/token.actions.githubusercontent.com",
            },
          },
        ],
      },
    });
  });

  it("uses StringEquals in the subject filter condition when wildcards are not present", () => {
    const app = new App();
    const stack = new Stack(app, "Stack");
    const provider = GithubActionsIdentityProvider.fromAccount(stack, { account: "123456789012", partition: "aws" });
    new GithubActionsRole(stack, "Role", {
      provider,
      subjectFilters: [new BranchFilter({ owner: "my-org", repository: "my-repo", branch: "main" })],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::IAM::Role", {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: "sts:AssumeRoleWithWebIdentity",
            Condition: {
              StringEquals: {
                "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
              },
            },
            Effect: "Allow",
            Principal: {
              Federated: "arn:aws:iam::123456789012:oidc-provider/token.actions.githubusercontent.com",
            },
          },
        ],
      },
    });
  });
});
