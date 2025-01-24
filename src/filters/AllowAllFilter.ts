import { IGithubActionOidcFilter } from "./IGithubActionOidcFilter";

/**
 * Allow assuming a role for all Github workflows (branches, tags, pull requests, environments, etc.)
 */
export class AllowAllFilter extends IGithubActionOidcFilter {
  public toSubject(): string {
    return `repo:${this.owner}/${this.repository}:*`;
  }
}
