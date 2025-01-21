export abstract class IGithubActionOidcFilter {
  public abstract toSubject(): string;

  constructor(
    protected readonly owner: string,
    protected readonly repository: string,
  ) {}
}
