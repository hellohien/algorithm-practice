// Fizz Buzz Problem involves that given an integer n, for every integer i <= n, the task is to print,
// ‘FizzBuzz’ if i is divisible by 3 and 5,
// ‘Fizz’ if i is divisible by 3,
// ‘Buzz’ if i is divisible by 5
// ‘i’ as a string, if none of the conditions are true.

function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
