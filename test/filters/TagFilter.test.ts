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
});
