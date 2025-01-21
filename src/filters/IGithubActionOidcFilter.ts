export interface GithubActionOidcFilterProps {
  /** The org or user that owns the repository */
  readonly owner: string;

  /** The name of the repository */
  readonly repository: string;
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
