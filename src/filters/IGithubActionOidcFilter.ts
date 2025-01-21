export interface GithubActionOidcFilterProps {
  /** The org or user that owns the repository */
  owner: string;

  /** The name of the repository */
  repository: string;
}

export abstract class IGithubActionOidcFilter {
  protected readonly owner: string;
  protected readonly repository: string;

  constructor(props: GithubActionOidcFilterProps) {
    this.owner = props.owner;
    this.repository = props.repository;
  }

  public abstract toSubject(): string;
}
