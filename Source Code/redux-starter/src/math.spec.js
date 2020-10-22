import { isEven } from "./math";

describe("isEven", () => {
  it("should return true if given an even number", () => {
    const result = isEven(2); //system or function "under test"
    expect(result).toEqual(true); //matcher
  });

  it("should return false if given an odd number", () => {
    const result = isEven(3); //system or function "under test"
    expect(result).toEqual(false); //matcher
  });
});
