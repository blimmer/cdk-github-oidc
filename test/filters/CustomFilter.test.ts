import { CustomFilter } from "../../src";

describe("CustomFilter", () => {
  it("creates the expected subject filter", () => {
    const filter = new CustomFilter({ owner: "my-org", repository: "my-repo", filter: "something_new" });
    expect(filter.toSubject()).toEqual("repo:my-org/my-repo:something_new");
  });

  it("creates the expected subject filter using immutable subject claims", () => {
    const filter = new CustomFilter({
      owner: "my-org",
      ownerId: "630449",
      repository: "my-repo",
      repositoryId: "919628491",
      filter: "something_new",
    });
    expect(filter.toSubject()).toEqual("repo:my-org@630449/my-repo@919628491:something_new");
  });
});
