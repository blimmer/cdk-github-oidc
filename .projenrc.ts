import { awscdk, ReleasableCommits } from "projen";
import { GithubCredentials } from "projen/lib/github";
import { ProseWrap } from "projen/lib/javascript";

const project = new awscdk.AwsCdkConstructLibrary({
  author: "Ben Limmer",
  authorAddress: "hello@benlimmer.com",
  cdkVersion: "2.73.0", // Released in April 2023
  defaultReleaseBranch: "main",
  name: "@blimmer/cdk-github-oidc",
  repositoryUrl: "https://github.com/blimmer/cdk-github-oidc.git",
  description: "AWS CDK construct to create OIDC roles for CircleCI jobs",
  keywords: ["cdk", "aws-cdk", "awscdk", "aws", "iam", "github", "github-actions", "oidc", "openid-connect"],
  prerelease: "alpha",

  githubOptions: {
    projenCredentials: GithubCredentials.fromApp(),
  },

  projenrcTs: true,

  jsiiVersion: "~5.7.0",

  releasableCommits: ReleasableCommits.featuresAndFixes(), // don't release "chore" commits
  python: {
    distName: "cdk-github-oidc",
    module: "cdk_github_oidc",
  },

  // deps: [],
  devDeps: ["@mrgrain/jsii-struct-builder"],
  depsUpgrade: false,
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

project.synth();
