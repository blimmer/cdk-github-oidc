import { ProjenStruct, Struct } from "@mrgrain/jsii-struct-builder";
import { awscdk, ReleasableCommits } from "projen";
import { GithubCredentials } from "projen/lib/github";
import { NpmAccess, ProseWrap, UpgradeDependenciesSchedule } from "projen/lib/javascript";

const project = new awscdk.AwsCdkConstructLibrary({
  author: "Ben Limmer",
  authorAddress: "hello@benlimmer.com",
  cdkVersion: "2.73.0", // Released in April 2023
  defaultReleaseBranch: "main",
  name: "@blimmer/cdk-github-oidc",
  repositoryUrl: "https://github.com/blimmer/cdk-github-oidc.git",
  description: "AWS CDK construct to create OIDC roles for CircleCI jobs",
  keywords: ["cdk", "aws-cdk", "awscdk", "aws", "iam", "github", "github-actions", "oidc", "openid-connect"],
  majorVersion: 1,

  githubOptions: {
    projenCredentials: GithubCredentials.fromApp(),
  },

  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ["projen-automation-app[bot]"],
    secret: "AUTO_APPROVE_GITHUB_TOKEN", // if https://github.com/projen/projen/issues/1736 is fixed, we could use the app instead
  },

  projenrcTs: true,

  jsiiVersion: "~5.8.0",

  releasableCommits: ReleasableCommits.featuresAndFixes(), // don't release "chore" commits
  npmAccess: NpmAccess.PUBLIC,
  npmTrustedPublishing: true,
  python: {
    distName: "cdk-github-oidc",
    module: "cdk_github_oidc",
    trustedPublishing: true,
  },

  // deps: [],
  devDeps: ["@mrgrain/jsii-struct-builder"],
  depsUpgradeOptions: {
    workflowOptions: {
      schedule: UpgradeDependenciesSchedule.MONTHLY,
    },
  },

  eslintOptions: {
    dirs: ["src"],
    ignorePatterns: ["src/generated/*.ts"], // ignore generated files
  },

  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      proseWrap: ProseWrap.ALWAYS,
    },
  },
});

new ProjenStruct(project, { name: "RoleProps", filePath: "src/generated/IamRoleProps.ts" }).mixin(
  Struct.fromFqn("aws-cdk-lib.aws_iam.RoleProps").omit("assumedBy").withoutDeprecated(),
);

project.synth();
