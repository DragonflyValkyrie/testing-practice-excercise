export default function reverseString(string) {
  if (string == null) return "null";
  var splitString = string.split("");

  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");

  return joinArray;
}
