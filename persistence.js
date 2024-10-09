// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// Examples
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
function persistence(num) {
  let currentNum = num;
  let count = 0;
  if (currentNum < 10) {
    return count;
  }
  while (currentNum >= 10) {
    console.log("current num", num);
    // Convert the number to an array of digits
    // map(Number) convert each element to a number
    let numArr = currentNum.toString().split("").map(Number);
    console.log("num arr", numArr);
    // Multiply all digits together
    currentNum = numArr.reduce((acc, digit) => acc * digit, 1);
    count++;
  }
  return count;
}
