# `@blimmer/cdk-github-oidc`

A CDK construct library that enables secure authentication between GitHub Actions and AWS using OpenID Connect (OIDC).
This eliminates the need for long-lived AWS credentials in your GitHub repositories.

## What is OIDC?

OIDC (OpenID Connect) allows GitHub Actions to authenticate directly with AWS using short-lived tokens instead of
storing AWS credentials. The process is described in
[GitHub's documentation](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect).

## Security Benefits

Using OIDC for GitHub Actions authentication:

- Eliminates the need to store AWS credentials as GitHub secrets
- Provides short-lived, automatically rotated credentials
- Enables fine-grained access control based on repository, branch, environment, or other conditions
- Follows security best practices for cloud access

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

For Python, see [below](#python).

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
      subjectFilters: [new BranchFilter({ owner: "blimmer", repository: "cdk-github-oidc", branch: "*" })],
    });
  }
}
```

### Subject Filters

You must pass one or more `SubjectFilter`s to the `GithubActionsRole` construct. These filters are used to determine
which GitHub Actions workflows can assume the role.

This construct exposes first class support for the following filters:

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

You can learn more about subject filters in the
[Github docs](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider)

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

## Usage

For detailed API docs, see [API.md](/API.md).

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
