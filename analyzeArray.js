function analyzeArray(array) {
  if (array.length == 0) return { avg: null, min: null, max: null, len: 0 };
  let len = array.length;
  let max = array[0];
  let min = array[0];
  let total = 0;
  let avg = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }

    total += array[i];

    avg = total / len;
  }
  return { avg, min, max, len };
}

export default analyzeArray;
