export default function capitalize(string) {
  if (string == null) return "null";
  if (!/^[a-zA-Z]+$/.test(string)) return "null";
  return string.charAt(0).toUpperCase() + string.slice(1);
}
