import caeserCipher from "../caesarCipher";

test("String capitalize", () => {
  expected(caeserCipher("Hello World", 4)).toBe("Khoor Zruog");
});

test("String", () => {
  expected(caeserCipher("hello world", 4)).toBe("khoor zruog");
});

test("No shift", () => {
  expected(caeserCipher("Hello World", 0)).toBe("Hello World");
});

test("Big shift", () => {
  expected(caeserCipher("Hello World", 64)).toBe("Tqxxa Iadxp");
});

test("Empty String", () => {
  expected(caeserCipher("", 2)).toBe("");
});

test("Negative shift", () => {
  expect(caeserCipher("Hello World", -4)).toBe("Lipps Asvph");
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

test("No shift", () => {
  expect(caeserCipher("Hello, World!", "Hello, World!")).toBe(null);
});
