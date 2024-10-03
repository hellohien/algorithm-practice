// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example: "aabbcde" -> 2 # 'a' and 'b'
function duplicateCount(text) {
  const counts = {};
  const textArr = text.toLowerCase().split("");

  if (text !== "") {
    textArr.forEach((value) => {
      if (!counts[value]) {
        counts[value] = 1;
      } else {
        counts[value]++;
      }
    });

    let count = 0;

    for (var key in counts) {
      if (counts[key] > 1) {
        count = count + 1;
      }
    }

    return count;
  } else {
    return 0;
  }
}
