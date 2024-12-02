const sum = require("../src/sum");

it("should return correct sum", () => {
  const result = sum(2, 11);
  expect(result).toBe(13);
});
