// Analyze the difference in adjacent letters of the alphabet given a string. Given an input sequence of words, find the 'Odd One Out' by checking the difference between adjacent letters. The element having a distinct difference is the 'Odd One Out.'
function findOdd(series) {
  // Helper function to calculate differences in adjacent letters of a string
  function getDifferences(word) {
    let differences = [];
    for (let i = 0; i < word.length - 1; i++) {
      differences.push(word.charCodeAt(i + 1) - word.charCodeAt(i));
    }
    return differences;
  }

  // Store differences for all words
  let allDifferences = series.map(getDifferences);

  // Compare each word's differences to others to find the "Odd One Out"
  for (let i = 0; i < allDifferences.length; i++) {
    let current = allDifferences[i];

    // Compare current word's differences with every other word's differences
    let matchCount = 0;
    for (let j = 0; j < allDifferences.length; j++) {
      if (
        i !== j &&
        JSON.stringify(current) === JSON.stringify(allDifferences[j])
      ) {
        matchCount++;
      }
    }

    // If no match is found with other words, it is the odd one
    if (matchCount === 0) {
      return series[i];
    }
  }

  // Default case if no odd one found
  return null;
}

// Example usage
let series = ["ACB", "BDC", "CED", "DEF"];
console.log(findOdd(series)); // Output: "DEF"
