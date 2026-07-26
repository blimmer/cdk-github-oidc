import { EnvironmentFilter } from "../../src";

describe("EnvironmentFilter", () => {
  it("creates the expected subject filter", () => {
    const filter = new EnvironmentFilter({ owner: "my-org", repository: "my-repo", environment: "production" });
    expect(filter.toSubject()).toEqual("repo:my-org/my-repo:environment:production");
  });

  it("creates the expected subject filter using immutable subject claims", () => {
    const filter = new EnvironmentFilter({
      owner: "my-org",
      ownerId: "630449",
      repository: "my-repo",
      repositoryId: "919628491",
      environment: "production",
    });
    expect(filter.toSubject()).toEqual("repo:my-org@630449/my-repo@919628491:environment:production");
  });
});
