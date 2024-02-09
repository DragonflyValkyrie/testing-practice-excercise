import reverseString from "../reverseString";

test("Reverse string", () => {
  expect(reverseString("john")).toBe("nhoj");
});

test("Empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Symbol string", () => {
  expect(reverseString("H$ll0")).toBe("0ll$H");
});

test("Reverse long string", () => {
  expect(reverseString("john is a good man")).toBe("nam doog a si nhoj");
});
