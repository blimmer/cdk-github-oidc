import { IGithubActionOidcFilter } from "./IGithubActionOidcFilter";

/**
 * Allow assuming a role from (non-environment-specific) pull requests.
 *
 * https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#filtering-for-pull_request-events
 */
export class PullRequestFilter extends IGithubActionOidcFilter {
  public toSubject(): string {
    return `repo:${this.owner}/${this.repository}:pull_request`;
  }
}
