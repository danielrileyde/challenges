import { add, subtract, multiply, divide } from "./index.js";

test("adds the numbers 10 and 2 correctly", () => {
  const result = add(10, 2);
  expect(result).toBe(12);
});

test("subtracts the number 10 and 2 correctly", () => {
  const result = subtract(10, 2);
  expect(result).toBe(8);
});

test("multiplys the numbers 5 and 5 correctly", () => {
  const result = multiply(5, 5);
  expect(result).toBe(25);
});

test("divides the number 100 and 5 correctly", () => {
  const result = divide(100, 5);
  expect(result).toBe(20);
});

test("returns You should not do this! if not divisable", () => {
  const result = divide(0, 100);
  expect(result).toBe(0);
});
