import { IGithubActionOidcFilter, type GithubActionOidcFilterProps } from "./IGithubActionOidcFilter";

export interface EnvironmentFilterProps extends GithubActionOidcFilterProps {
  /** The name of the Github environment to allow assuming this role */
  environment: string;
}

/**
 * Allow assuming a role for a specific Github environment.
 *
 * https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#filtering-for-a-specific-environment
 */
export class EnvironmentFilter extends IGithubActionOidcFilter {
  private environment: string;

  constructor(props: EnvironmentFilterProps) {
    const { environment, ...rest } = props;
    super(rest);

    this.environment = environment;
  }

  public toSubject(): string {
    return `repo:${this.owner}/${this.repository}:environment:${this.environment}`;
  }
}
