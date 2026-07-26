import { PullRequestFilter } from "../../src";

describe("PullRequestFilter", () => {
  it("creates the expected subject filter", () => {
    const filter = new PullRequestFilter({ owner: "my-org", repository: "my-repo" });
    expect(filter.toSubject()).toEqual("repo:my-org/my-repo:pull_request");
  });

  it("creates the expected subject filter using immutable subject claims", () => {
    const filter = new PullRequestFilter({
      owner: "my-org",
      ownerId: "630449",
      repository: "my-repo",
      repositoryId: "919628491",
    });
    expect(filter.toSubject()).toEqual("repo:my-org@630449/my-repo@919628491:pull_request");
  });
});
