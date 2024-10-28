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
  let trib: number[] = signature;
  if (n <= 1) {
    return trib.slice(0, n);
  }
  for (let i = 0; i < n - 3; i++) {
    let sum = signature[i] + signature[i + 1] + signature[i + 2];
    trib.push(sum);
  }
  return trib;
}
