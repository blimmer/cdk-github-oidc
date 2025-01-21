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
});
