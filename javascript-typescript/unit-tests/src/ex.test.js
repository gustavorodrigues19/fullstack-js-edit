import { calculate, fetchData, throwError } from "./ex";
// const { calculate } = require("./ex");

const api_response_mock = {
  id: 625,
  uid: "aa16b99c-db93-4d70-b40e-6b2055dbc718",
  password: "Jtxl4RvDdk",
  first_name: "Bo",
  last_name: "Emmerich",
  username: "bo.emmerich",
  email: "bo.emmerich@email.com",
  avatar:
    "https://robohash.org/doloremconsecteturqui.png?size=300x300&set=set1",
  gender: "Male",
  phone_number: "+1-671 731-586-1769",
  social_insurance_number: "388386062",
  date_of_birth: "1989-08-27",
  employment: { title: "Customer Technician", key_skill: "Technical savvy" },
  address: {
    city: "South Esteban",
    street_name: "Noel Curve",
    street_address: "83207 Genaro Hollow",
    zip_code: "37666",
    state: "Montana",
    country: "United States",
    coordinates: { lat: 2.937764328491639, lng: -141.37481685196224 },
  },
  credit_card: { cc_number: "4325-8513-0475-2880" },
  subscription: {
    plan: "Silver",
    status: "Pending",
    payment_method: "Google Pay",
    term: "Full subscription",
  },
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(api_response_mock),
  })
);

describe("test exercices", () => {
  // Arrange: Arrange the setup and initialization for the test.
  // Act: Act on the unit for the given test.
  // Assert: Assert or verify the outcome.
  it("calculate a sum", () => {
    const result = calculate(1, 2, "+");
    expect(result).toBe(3);
  });

  it("calculate a sub operation", () => {
    const result = calculate(1, 2, "-");
    expect(result).toBe(-1);
  });

  it("test should fetch data", async () => {
    const result = await fetchData();
    expect(result).toEqual(api_response_mock);
  });

  it("test should not throw an error", () => {
    const result = throwError("arg");
    expect(result).toBe("arg");
  });

  it("test should throw an error", () => {
    // try {
    //   throwError(null);
    // } catch (error) {
    //   expect(error).toEqual(new Error("Invalid argument"));
    // }
    // expect.assertions(1);
    expect(() => {
      throwError(null);
    }).toThrow("Invalid argument");
  });
});
