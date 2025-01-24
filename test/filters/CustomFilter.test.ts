import { CustomFilter } from "../../src";

describe("CustomFilter", () => {
  it("creates the expected subject filter", () => {
    const filter = new CustomFilter({ owner: "my-org", repository: "my-repo", filter: "something_new" });
    expect(filter.toSubject()).toEqual("repo:my-org/my-repo:something_new");
  });
});
