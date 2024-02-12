import analyzeArray from "../analyzeArray";

test("Sample Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    avg: 4,
    min: 1,
    max: 8,
    len: 6,
  });
});

test("Empty Array", () => {
  expect(analyzeArray([])).toStrictEqual({
    avg: null,
    min: null,
    max: null,
    len: 0,
  });
});

test("one element array", () => {
  expect(analyzeArray([7])).toStrictEqual({
    avg: 7,
    min: 7,
    max: 7,
    len: 1,
  });
});
