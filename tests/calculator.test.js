import calculator from "../calculator";

test("Add 2 nums", () => {
  expect(calculator.add(4, 4)).toBe(8);
});

test("Subtract 2 nums", () => {
  expect(calculator.subtract(6, 4)).toBe(2);
});

test("Divide 2 nums", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("Multiply 2 nums", () => {
  expect(calculator.multiply(10, 5)).toBe(50);
});
