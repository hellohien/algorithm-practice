function getDivisorsCount(n) {
  let count = 0;
  //i * i <= n - iterate only up to the square root of n
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count++; // i is a divisor
      if (i !== n / i) {
        count++; //n / i is also a divisor, but only if it's different from i
      }
    }
  }
  return count;
}
