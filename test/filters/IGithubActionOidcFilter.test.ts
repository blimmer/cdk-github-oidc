import { BranchFilter } from "../../src";

describe("IGithubActionOidcFilter", () => {
  it("throws if ownerId is an empty string", () => {
    expect(() => {
      new BranchFilter({
        owner: "my-org",
        ownerId: "",
        repository: "my-repo",
        repositoryId: "919628491",
        branch: "main",
      });
    }).toThrow("`ownerId` and `repositoryId` must not be empty strings.");
  });

  it("throws if repositoryId is an empty string", () => {
    expect(() => {
      new BranchFilter({ owner: "my-org", ownerId: "630449", repository: "my-repo", repositoryId: "", branch: "main" });
    }).toThrow("`ownerId` and `repositoryId` must not be empty strings.");
  });

  it("throws if only ownerId is provided", () => {
    expect(() => {
      new BranchFilter({ owner: "my-org", ownerId: "630449", repository: "my-repo", branch: "main" });
    }).toThrow("`ownerId` and `repositoryId` must be provided together.");
  });

  it("throws if only repositoryId is provided", () => {
    expect(() => {
      new BranchFilter({ owner: "my-org", repository: "my-repo", repositoryId: "919628491", branch: "main" });
    }).toThrow("`ownerId` and `repositoryId` must be provided together.");
  });

  it("throws if owner already contains the ID", () => {
    expect(() => {
      new BranchFilter({
        owner: "my-org@630449",
        ownerId: "630449",
        repository: "my-repo",
        repositoryId: "919628491",
        branch: "main",
      });
    }).toThrow("`owner` must not contain `@` when `ownerId` is provided");
  });

  it("throws if repository already contains the ID", () => {
    expect(() => {
      new BranchFilter({
        owner: "my-org",
        ownerId: "630449",
        repository: "my-repo@919628491",
        repositoryId: "919628491",
        branch: "main",
      });
    }).toThrow("`repository` must not contain `@` when `repositoryId` is provided");
  });
});
