const mult = require("../src/mult");

it("should return correct multiplication", () => {
  const result = mult(5, 3);
  expect(result).toBe(11);
});
