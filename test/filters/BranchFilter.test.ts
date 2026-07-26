import { BranchFilter } from "../../src";

describe("BranchFilter", () => {
  it("creates the expected subject filter", () => {
    const filter = new BranchFilter({ owner: "my-org", repository: "my-repo", branch: "main" });
    expect(filter.toSubject()).toEqual("repo:my-org/my-repo:ref:refs/heads/main");
  });

  it("can limit to all branches", () => {
    const filter = new BranchFilter({ owner: "my-org", repository: "my-repo", branch: "*" });
    expect(filter.toSubject()).toEqual("repo:my-org/my-repo:ref:refs/heads/*");
  });

  it("creates the expected subject filter using immutable subject claims", () => {
    const filter = new BranchFilter({
      owner: "my-org",
      ownerId: "630449",
      repository: "my-repo",
      repositoryId: "919628491",
      branch: "main",
    });
    expect(filter.toSubject()).toEqual("repo:my-org@630449/my-repo@919628491:ref:refs/heads/main");
  });
});
