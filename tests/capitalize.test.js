import capitalize from "../capitalize";

test("First letter capitalized", () => {
  expect(capitalize("john")).toBe("John");
});

test("Empty String", () => {
  expect(capitalize("")).toBe("null");
});

test("Single letter capitalized", () => {
  expect(capitalize("j")).toBe("J");
});

test("Inavlid String", () => {
  expect(capitalize("j0hn")).toBe("null");
});
