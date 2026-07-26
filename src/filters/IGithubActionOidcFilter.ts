const DOCS_URL = "https://github.com/blimmer/cdk-github-oidc#immutable-subject-claims";

export interface GithubActionOidcFilterProps {
  /** The org or user that owns the repository */
  readonly owner: string;

  /** The name of the repository */
  readonly repository: string;

  /**
   * The numeric ID of the org or user that owns the repository, used by GitHub's immutable subject claim format.
   *
   * Must be provided together with `repositoryId`. Find it via
   * `gh api repos/OWNER/REPO --jq .owner.id`.
   *
   * @default - the subject uses the previous (name-only) format
   */
  readonly ownerId?: string;

  /**
   * The numeric ID of the repository, used by GitHub's immutable subject claim format.
   *
   * Must be provided together with `ownerId`. Find it via `gh api repos/OWNER/REPO --jq .id`.
   *
   * @default - the subject uses the previous (name-only) format
   */
  readonly repositoryId?: string;
}

/**
 * An abstract class that represents a filter for a Github Actions OIDC filter.
 *
 * You can implement this class to create your own filters.
 */
export abstract class IGithubActionOidcFilter {
  protected readonly owner: string;
  protected readonly repository: string;
  protected readonly ownerId?: string;
  protected readonly repositoryId?: string;

  constructor(props: GithubActionOidcFilterProps) {
    if (props.ownerId === "" || props.repositoryId === "") {
      throw new Error(
        `\`ownerId\` and \`repositoryId\` must not be empty strings. Omit both to build a subject like \`repo:owner/repo:...\`, or pass both to build one like \`repo:owner@123/repo@456:...\`. See ${DOCS_URL}`,
      );
    }

    if ((props.ownerId === undefined) !== (props.repositoryId === undefined)) {
      throw new Error(
        `\`ownerId\` and \`repositoryId\` must be provided together. GitHub's immutable subject claim looks like \`repo:owner@123/repo@456:...\`, so a subject built from only one ID can never match. See ${DOCS_URL}`,
      );
    }

    if (props.ownerId !== undefined && props.owner.includes("@")) {
      throw new Error(
        `\`owner\` must not contain \`@\` when \`ownerId\` is provided, or the ID is applied twice (\`owner@123@123\`). Pass the plain owner name. See ${DOCS_URL}`,
      );
    }

    if (props.repositoryId !== undefined && props.repository.includes("@")) {
      throw new Error(
        `\`repository\` must not contain \`@\` when \`repositoryId\` is provided, or the ID is applied twice (\`repo@456@456\`). Pass the plain repository name. See ${DOCS_URL}`,
      );
    }

    this.owner = props.owner;
    this.repository = props.repository;
    this.ownerId = props.ownerId;
    this.repositoryId = props.repositoryId;
  }

  /**
   * The `repo:` prefix shared by every subject claim, in whichever format this filter was configured for.
   *
   * Use this instead of building the prefix by hand so your filter works with both the previous and the immutable
   * subject claim formats.
   */
  protected get repositoryClaim(): string {
    const owner = this.ownerId === undefined ? this.owner : `${this.owner}@${this.ownerId}`;
    const repository = this.repositoryId === undefined ? this.repository : `${this.repository}@${this.repositoryId}`;
    return `repo:${owner}/${repository}`;
  }

  public abstract toSubject(): string;
}
