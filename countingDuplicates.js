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

//better solution
const duplicateCount = (string) => {
  // makes an array all lowercase and sorts the array in alpha order for easy comparrison
  let newString = string.toLowerCase().split("").sort();

  // this array will house the duplicated values so we can
  // get the length of it (or the number of duplicated characters).
  let newArray = [];

  // set a loop for the array
  for (i = 0; i < newString.length; i++) {
    // if the current element equals the following element then push it to the new array AND
    // ONLY if the new array doesn't already include the current element
    if (newString[i] === newString[i + 1] && !newArray.includes(newString[i])) {
      // push elements to new array
      newArray.push(newString[i]);
    }
  }
  // return the number of elements in the array to represent the number characters that were duplicated
  return newArray.length;
};
