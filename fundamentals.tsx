// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filterList(l: []) {
  return l.filter((el) => typeof el == "number");
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(sheep: []) {
  return sheep.filter((el) => el).length;
}

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.
// You need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified.
function tribonacci(signature: number[], n: number) {
  for (let i = 0; i < n - 3; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
  }
  return signature.slice(0, n);
}

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
function isTriangle(a: number, b: number, c: number) {
  return a + b > c && a + c > b && c + b > a;
}
