import { AllowAllFilter } from "../../src";

describe("AllowAllFilter", () => {
  it("creates the expected subject filter", () => {
    const filter = new AllowAllFilter({ owner: "my-org", repository: "my-repo" });
    expect(filter.toSubject()).toEqual("repo:my-org/my-repo:*");
  });
});
