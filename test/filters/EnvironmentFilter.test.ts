import { EnvironmentFilter } from "../../src";

describe("EnvironmentFilter", () => {
  it("creates the expected subject filter", () => {
    const filter = new EnvironmentFilter({ owner: "my-org", repository: "my-repo", environment: "production" });
    expect(filter.toSubject()).toEqual("repo:my-org/my-repo:environment:production");
  });
});
