# `@blimmer/cdk-github-oidc`

A CDK construct library that enables secure authentication between GitHub Actions and AWS using OpenID Connect (OIDC).
This eliminates the need for long-lived AWS credentials in your GitHub repositories.

## What is OIDC?

OIDC (OpenID Connect) allows GitHub Actions to authenticate directly with AWS using short-lived tokens instead of
storing AWS credentials. The process is described in
[GitHub's documentation](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect).

<details>
<summary>Why use OIDC instead of access keys?</summary>

- Eliminates the need to store AWS credentials as GitHub secrets
- Provides short-lived, automatically rotated credentials
- Enables fine-grained access control based on repository, branch, environment, or other conditions
- Follows security best practices for cloud access

</details>

## Installation

### Node.js

```shell
npm install --save @blimmer/cdk-github-oidc
```

or

```shell
yarn add @blimmer/cdk-github-oidc
```

### Python

```bash
pip install cdk-github-oidc
```

## Usage

The examples below are TypeScript. For the full API in every supported language, see [API.md](/API.md).

### Create or Import a Provider

Each AWS account must be bootstrapped with a single OIDC provider.

To create it in your stack, use the `GithubActionsIdentityProvider` construct.

```ts
import { GithubActionsIdentityProvider } from "@blimmer/cdk-github-oidc";

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const provider = new GithubActionsIdentityProvider(this, "Provider");
  }
}
```

Or, if another stack created the provider, you can import it using the `GithubActionsIdentityProvider.fromAccount()`
method.

```ts
import { GithubActionsIdentityProvider } from "@blimmer/cdk-github-oidc";

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const provider = GithubActionsIdentityProvider.fromAccount(this);
  }
}
```

### Create a Role

Once you have a handle to a provider, you can create a role assumed by GitHub Actions. You grant this role permission to
access the resources/APIs you need (more on that [below](#granting-permissions-to-the-role)).

```ts
import { GithubActionsRole, GithubActionsIdentityProvider, BranchFilter } from "@blimmer/cdk-github-oidc";

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const provider = new GithubActionsIdentityProvider(this, "Provider");

    const role = new GithubActionsRole(this, "Role", {
      provider,
      roleName: "my-github-actions-role",
      description: "Role assumed by GitHub Actions",
      subjectFilters: [
        new BranchFilter({
          owner: "blimmer",
          ownerId: "630449",
          repository: "cdk-github-oidc",
          repositoryId: "919628491",
          branch: "*",
        }),
      ],
    });
  }
}
```

`ownerId` and `repositoryId` opt into GitHub's [immutable subject claims](#immutable-subject-claims), the default for
repositories created after July 15, 2026. Omit both if your repository predates that.

### Subject Filters

You must pass one or more `SubjectFilter`s to the `GithubActionsRole` construct. These filters are used to determine
which GitHub Actions workflows can assume the role.

This construct exposes first class support for the following filters. The examples omit `ownerId` and `repositoryId` to
keep the focus on what each filter does; add them as shown above if your repository uses immutable subject claims.

- [`AllowAllFilter`](/API.md#allowallfilter)

  ```ts
  // Allow all branches, tags, environments, pull requests, etc.
  new AllowAllFilter({
    owner: "blimmer",
    repository: "cdk-github-oidc",
  });
  ```

- [`BranchFilter`](/API.md#branchfilter)

  ```ts
  // Allow all branches
  new BranchFilter({
    owner: "blimmer",
    repository: "cdk-github-oidc",
    branch: "*",
  });

  // Specify a branch
  new BranchFilter({
    owner: "blimmer",
    repository: "cdk-github-oidc",
    branch: "main",
  });

  // Specify a branch pattern
  new BranchFilter({
    owner: "blimmer",
    repository: "cdk-github-oidc",
    branch: "feature/*",
  });
  ```

- [`TagFilter`](/API.md#tagfilter)

  ```ts
  // Allow all tags
  new TagFilter({
    owner: "blimmer",
    repository: "cdk-github-oidc",
    tag: "*",
  });

  // Specify a tag
  new TagFilter({
    owner: "blimmer",
    repository: "cdk-github-oidc",
    tag: "v1.0.0",
  });

  // Specify a tag pattern
  new TagFilter({
    owner: "blimmer",
    repository: "cdk-github-oidc",
    tag: "v1.*",
  });
  ```

- [`EnvironmentFilter`](/API.md#environmentfilter)

  ```ts
  // Allow all environments
  new EnvironmentFilter({
    owner: "blimmer",
    repository: "cdk-github-oidc",
    environment: "*",
  });

  // Specify an environment
  new EnvironmentFilter({
    owner: "blimmer",
    repository: "cdk-github-oidc",
    environment: "staging",
  });
  ```

- [`PullRequestFilter`](/API.md#pullrequestfilter)

  ```ts
  // Allow all pull requests
  new PullRequestFilter({
    owner: "blimmer",
    repository: "cdk-github-oidc",
  });
  ```

If none of these filters fit your use case, you can implement your own via the
[`IGithubActionOidcFilter`](/API.md#igithubactionoidcfilter) interface, or use the
[`CustomFilter`](/API.md#customfilter) construct.

When writing your own, build the subject from the protected `repositoryClaim` getter rather than from `owner` and
`repository` directly. It renders whichever `repo:` prefix the filter was configured for, so your filter keeps working
if the repository moves to [immutable subject claims](#immutable-subject-claims).

```ts
class DeploymentFilter extends IGithubActionOidcFilter {
  public toSubject(): string {
    return `${this.repositoryClaim}:deployment`;
  }
}
```

You can learn more about subject filters in the
[Github docs](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider)

### Immutable Subject Claims

GitHub is moving to an
[immutable subject claim format](https://docs.github.com/en/actions/reference/security/oidc#immutable-subject-claims)
that embeds numeric owner and repository IDs:

```
repo:blimmer/cdk-github-oidc:ref:refs/heads/main                   # previous
repo:blimmer@630449/cdk-github-oidc@919628491:ref:refs/heads/main  # immutable
```

Repositories created after July 15, 2026 use the immutable format, as do repositories renamed or transferred after that
date. Everything else keeps the previous format until you opt in, per repo or per org, in the OIDC settings UI or the
[REST API](https://docs.github.com/en/rest/actions/oidc). A repository emits one format or the other, never both.

Pass `ownerId` and `repositoryId` to any filter to get the immutable format:

```ts
new BranchFilter({
  owner: "blimmer",
  ownerId: "630449",
  repository: "cdk-github-oidc",
  repositoryId: "919628491",
  branch: "main",
});
```

Leave them off and you get the previous format, which is what the [subject filter](#subject-filters) examples above do.

#### Finding the IDs

```sh
gh api repos/OWNER/REPO --jq '{ownerId: .owner.id, repositoryId: .id}'
```

To check which format a repository emits right now, read `sub_claim_prefix`:

```sh
gh api repos/OWNER/REPO/actions/oidc/customization/sub
# {"use_default":true,"use_immutable_subject":false,"sub_claim_prefix":"repo:blimmer/cdk-github-oidc"}
```

The same setting lives at `https://github.com/OWNER/REPO/settings/actions/oidc-configuration`.

#### Migration Prompt

If you have more than a couple of filters, hand this to your coding agent.

<details>
<summary>Show the prompt</summary>

```text
Upgrade `@blimmer/cdk-github-oidc` to the latest version, then audit this CDK app for GitHub's immutable OIDC
subject claim format.

Background: GitHub embeds numeric owner and repository IDs in the OIDC `sub` claim
(`repo:owner@123/repo@456:ref:refs/heads/main` instead of `repo:owner/repo:ref:refs/heads/main`). Repositories
created, renamed, or transferred after July 15, 2026 use it automatically. Older repositories keep the previous
format until someone opts in. A repository emits one format or the other, never both, so a trust policy built for
the wrong format fails with `Not authorized to perform sts:AssumeRoleWithWebIdentity`.

For every subject filter passed to a `GithubActionsRole` in this app:

1. Run `gh api repos/<owner>/<repository>/actions/oidc/customization/sub` and read `use_immutable_subject`.
2. If it is `false`, leave the filter alone. It is already correct.
3. If it is `true`, run `gh api repos/<owner>/<repository> --jq '{ownerId: .owner.id, repositoryId: .id}'` and add
   both values to that filter as `ownerId` and `repositoryId` (strings, not numbers). Keep `owner` and
   `repository` as the plain names.

Then find every class in this app that extends `IGithubActionOidcFilter`. If its `toSubject()` builds the subject
from `this.owner` and `this.repository`, rewrite it to use the `this.repositoryClaim` getter instead, leaving the
rest of the subject unchanged. Custom filters that skip this keep emitting the previous format no matter which IDs
are passed to them.

Report any repository the `gh` calls fail for rather than guessing its IDs, since a wrong ID produces a role nobody
can assume. Do not add, remove, or re-scope any filter, and do not change anything beyond the filter arguments and
the custom filter subject construction.
```

</details>

#### Switching an Existing Repository

Add a second filter carrying the IDs, deploy, opt in on GitHub, then delete the original filter. The role trusts both
subjects in between, so nothing breaks mid-switch.

```ts
subjectFilters: [
  new BranchFilter({ owner: "blimmer", repository: "cdk-github-oidc", branch: "main" }),
  new BranchFilter({
    owner: "blimmer",
    ownerId: "630449",
    repository: "cdk-github-oidc",
    repositoryId: "919628491",
    branch: "main",
  }),
];
```

Double-check the IDs. A wrong one produces a subject that never matches, and the only symptom is
`Not authorized to perform sts:AssumeRoleWithWebIdentity`.

Don't reach for a wildcard like `blimmer@*` to avoid looking them up. That trusts every account named `blimmer`,
including whoever claims the name if the current owner renames or deletes it. Preventing exactly that is why the IDs
exist.

### Granting Permissions to the Role

The `GithubActionsRole` construct _is a_ `Role` construct, so you can use all of the same properties and methods as you
would with a normal
[CDK IAM `Role` construct](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_iam.Role.html).

```ts
import { GithubActionsRole, GithubActionsIdentityProvider, BranchFilter } from "@blimmer/cdk-github-oidc";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "Bucket");

    const provider = new GithubActionsIdentityProvider(this, "Provider");
    const role = new GithubActionsRole(this, "Role", {
      provider,
      roleName: "my-github-actions-role",
      description: "Role assumed by GitHub Actions",
      subjectFilters: [
        new BranchFilter({
          owner: "blimmer",
          repository: "cdk-github-oidc",
          branch: "*",
        }),
      ],
    });

    // Grant access via CDK `grant*` methods
    // https://docs.aws.amazon.com/cdk/v2/guide/permissions.html#permissions_grants
    role.grantReadWrite(bucket);

    // Add a custom policy
    role.addToPolicy(
      new PolicyStatement({
        actions: ["s3:PutObject"],
        resources: ["arn:aws:s3:::my-bucket/*"],
      }),
    );
  }
}
```

### Using a Role in a Workflow

To use a role in a GitHub Actions workflow, you can use the `aws-actions/configure-aws-credentials` action.

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write # Required for OIDC role assumption
    steps:
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789012:role/my-github-actions-role
          region: us-west-2
```

See [the `aws-actions/configure-aws-credentials` docs](https://github.com/aws-actions/configure-aws-credentials) for
more details.

## Troubleshooting

### Common Issues

1. **Role assumption fails**: Ensure your GitHub Action has the required permissions:

   ```yaml
   permissions:
     id-token: write # Required for OIDC
     contents: read # Required for checking out code
   ```

1. **Provider already exists**: Only one OIDC provider can exist per AWS account. Use
   `GithubActionsIdentityProvider.fromAccount()` if one already exists.

1. **Subject filter not matching**: Double check your subject filter configuration matches your GitHub workflow context.
   Use logging to debug the actual subject string being provided.

1. **Role assumption breaks after a repo is created, renamed, or transferred**: the repository probably switched to
   [immutable subject claims](#immutable-subject-claims). Run `gh api repos/OWNER/REPO/actions/oidc/customization/sub`
   to see which format it emits, and pass `ownerId` and `repositoryId` to your filters if `use_immutable_subject` is
   `true`. CloudTrail shows the subject that was actually presented.

## Migrating from `aws-cdk-github-oidc`

This package was inspired by [`aws-cdk-github-oidc`](https://github.com/aripalo/aws-cdk-github-oidc), but that package
became unmaintained.

For a role that looked like this in `aws-cdk-github-oidc`:

```ts
import { GithubActionsIdentityProvider, GithubActionsRole } from "aws-cdk-github-oidc";

const provider = new GithubActionsIdentityProvider(scope, "GithubProvider");
const deployRole = new GithubActionsRole(scope, "DeployRole", {
  provider,
  owner: "octo-org",
  repo: "octo-repo",
  roleName: "MyDeployRole",
  description: "This role deploys stuff to AWS",
  maxSessionDuration: cdk.Duration.hours(2),
});
```

The equivalent role in this package looks like this:

```ts
import { GithubActionsIdentityProvider, GithubActionsRole, AllowAllFilter } from "@blimmer/cdk-github-oidc";

const provider = new GithubActionsIdentityProvider(scope, "GithubProvider");
const deployRole = new GithubActionsRole(scope, "DeployRole", {
  provider,
  roleName: "MyDeployRole",
  description: "This role deploys stuff to AWS",
  subjectFilters: [
    // I encourage you to scope this down to a different filter (e.g., BranchFilter, TagFilter, PullRequestFilter, etc.)
    new AllowAllFilter({ owner: "octo-org", repository: "octo-repo" }),
  ],
  maxSessionDuration: cdk.Duration.hours(2),
});
```

### Resource Replacement

By default, CloudFormation will create resources before destroying the old ones. This is a problem when transitioning
between `aws-cdk-github-oidc` and `@blimmer/cdk-github-oidc` because the `GithubActionsIdentityProvider` is a singleton.
It might also affect your roles, if you specified a `roleName`.

To work around this issue, delete the old provider and role(s) before migrating to use this package. Note that this will
make the role unavailable for a few minutes while things are recreated

## Resources

- [Security hardening your deployments](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments)
  on Github Docs.
- [Assuming a role with `aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials#assuming-a-role)

## Contributing

Contributions, issues, and feedback are welcome!
