import { IGithubActionOidcFilter } from "./IGithubActionOidcFilter";

/**
 * Allow assuming a role for a specific Github environment.
 *
 * https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#filtering-for-a-specific-environment
 */
export class EnvironmentFilter extends IGithubActionOidcFilter {
  constructor(
    owner: string,
    repository: string,
    protected readonly environment: string,
  ) {
    super(owner, repository);
  }

  public toSubject(): string {
    return `repo:${this.owner}/${this.repository}:environment:${this.environment}`;
  }
}
