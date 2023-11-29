import { sub, sum, operation, fetchData } from "./script";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ address: { city: "East Rickiview" } }),
  })
);

describe("script test", () => {
  it("should sum two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should subtract two numbers", () => {
    const result = sub(2, 1);
    expect(result).toBe(1);
  });
});

// Arrange: Arrange the setup and initialization for the test.
// Act: Act on the unit for the given test.
// Assert: Assert or verify the outcome.
describe("operation test", () => {
  it("should sum two numbers", () => {
    const result = operation(1, 2, "+");
    expect(result).toBe(3);
  });

  it("should subtract two numbers", () => {
    const result = operation(1, 2, "-");
    expect(result).toBe(-1);
  });
  it("should throw an error because operator is not valid", () => {
    expect(() => {
      operation(1, 2, "*");
    }).toThrow("Operation not supported");
    try {
      operation(1, 2, "*");
    } catch (error) {
      expect(error).toEqual(new Error("Operation not supported"));
    }
  });
});

describe("fetchData", () => {
  it("should fetch data successfully", async () => {
    const resp = await fetchData();
    expect(resp).toEqual({ city: "East Rickiview" });
  });
});
