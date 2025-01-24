import { PullRequestFilter } from "../../src";

describe("PullRequestFilter", () => {
  it("creates the expected subject filter", () => {
    const filter = new PullRequestFilter({ owner: "my-org", repository: "my-repo" });
    expect(filter.toSubject()).toEqual("repo:my-org/my-repo:pull_request");
  });
});
