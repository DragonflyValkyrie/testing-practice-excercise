import caeserCipher from "../caesarCipher";

test("String capitalize", () => {
  expect(caeserCipher("Hello World", 4)).toBe("Lipps Asvph");
});

test("String", () => {
  expect(caeserCipher("hello world", 4)).toBe("lipps asvph");
});

test("No shift", () => {
  expect(caeserCipher("Hello World", 0)).toBe("Hello World");
});

test("Big shift", () => {
  expect(caeserCipher("Hello World", 64)).toBe("Tqxxa Iadxp");
});

test("Empty String", () => {
  expect(caeserCipher("", 2)).toBe("");
});

test("Negative shift", () => {
  expect(caeserCipher("Hello World", -4)).toBe("Dahhk Sknh`");
});

test("Non-alphabetic characters", () => {
  expect(caeserCipher("Hello, World!", 4)).toBe("Lipps, Asvph!");
});

test("Wrap around", () => {
  expect(caeserCipher("XYZ", 3)).toBe("ABC");
});

test("No string", () => {
  expect(caeserCipher(9, 3)).toBe(null);
});

test("Invalid shift", () => {
  expect(caeserCipher("Hello, World!", "Hello, World!", "")).toBe(null);
});
