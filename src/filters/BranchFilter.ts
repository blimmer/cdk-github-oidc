import { IGithubActionOidcFilter, type GithubActionOidcFilterProps } from "./IGithubActionOidcFilter";

interface BranchFilterProps extends GithubActionOidcFilterProps {
  /**
   * The name of the branch to filter on. You can also use wildcards.
   *
   * To allow all branches, pass `*`.
   */
  branch: string;
}

/**
 * Allow assuming a role for a specific Github branch.
 *
 * https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#filtering-for-a-specific-branch
 */
export class BranchFilter extends IGithubActionOidcFilter {
  private branch: string;

  constructor(props: BranchFilterProps) {
    const { branch, ...rest } = props;
    super(rest);

    this.branch = branch;
  }

  public toSubject(): string {
    return `repo:${this.owner}/${this.repository}:ref:refs/heads/${this.branch}`;
  }
}
