import { TagFilter } from "../../src";

describe("TagFilter", () => {
  it("creates the expected subject filter", () => {
    const filter = new TagFilter({ owner: "my-org", repository: "my-repo", tag: "v1.0.0" });
    expect(filter.toSubject()).toEqual("repo:my-org/my-repo:ref:refs/tags/v1.0.0");
  });

  it("can limit to all tags", () => {
    const filter = new TagFilter({ owner: "my-org", repository: "my-repo", tag: "*" });
    expect(filter.toSubject()).toEqual("repo:my-org/my-repo:ref:refs/tags/*");
  });

  it("creates the expected subject filter using immutable subject claims", () => {
    const filter = new TagFilter({
      owner: "my-org",
      ownerId: "630449",
      repository: "my-repo",
      repositoryId: "919628491",
      tag: "v1.0.0",
    });
    expect(filter.toSubject()).toEqual("repo:my-org@630449/my-repo@919628491:ref:refs/tags/v1.0.0");
  });
});
