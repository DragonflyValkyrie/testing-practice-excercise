function caesarCipher(string, shift) {
  if (typeof string !== "string") return null;
  if (typeof shift !== "number") return null;
  if (string.length == 0) return "";
  if (shift === 0) return string;

  let result = "";

  // Iterate over each character in the input string
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    // Check if the character is an alphabetic letter
    if (char.match(/[a-z]/i)) {
      const code = string.charCodeAt(i);

      // Check if the character is an uppercase letter
      if (code >= 65 && code <= 90) {
        // Apply the Caesar cipher transformation to uppercase letters
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        // Apply the Caesar cipher transformation to lowercase letters
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }

    result += char;
  }

  return result;
}

export default caesarCipher;
