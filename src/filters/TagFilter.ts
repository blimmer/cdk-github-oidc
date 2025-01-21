import { IGithubActionOidcFilter, type GithubActionOidcFilterProps } from "./IGithubActionOidcFilter";

interface TagFilterProps extends GithubActionOidcFilterProps {
  /**
   * The name of the tag to filter on. You can also use wildcards.
   *
   * To allow all tags, pass `*`.
   */
  tag: string;
}

/**
 * Allow assuming a role for a specific Github tag.
 *
 * https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#filtering-for-a-specific-tag
 */
export class TagFilter extends IGithubActionOidcFilter {
  private tag: string;

  constructor(props: TagFilterProps) {
    const { tag, ...rest } = props;
    super(rest);

    this.tag = tag;
  }

  public toSubject(): string {
    return `repo:${this.owner}/${this.repository}:ref:refs/tags/${this.tag}`;
  }
}
