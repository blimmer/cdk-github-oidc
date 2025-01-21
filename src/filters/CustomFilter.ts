import { IGithubActionOidcFilter, type GithubActionOidcFilterProps } from "./IGithubActionOidcFilter";

interface CustomFilterProps extends GithubActionOidcFilterProps {
  /**
   * The filter to apply
   *
   * See https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider
   */
  filter: string;
}

/**
 * Allow assuming a role for a specific Github filter.
 *
 * Use this as an escape hatch if we don't expose a first-class IGithubActionOidcFilter for your use case.
 */
export class CustomFilter extends IGithubActionOidcFilter {
  private filter: string;

  constructor(props: CustomFilterProps) {
    const { filter, ...rest } = props;
    super(rest);

    this.filter = filter;
  }

  public toSubject(): string {
    return `repo:${this.owner}/${this.repository}:${this.filter}`;
  }
}
