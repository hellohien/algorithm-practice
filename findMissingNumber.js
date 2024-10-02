// Find the missing number in a given integer array of 1 to 100
const findMissingNum = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  return false;
};

console.log(findMissingNum([1, 2, 3, 4, 5, 6, 7, 8, 10]));
