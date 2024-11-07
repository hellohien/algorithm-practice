function countPositivesSumNegatives(input: number[]) {
  let positive = input?.filter((num) => num > 0).length || 0;
  let negative =
    input?.filter((num) => num < 0).reduce((acc, num) => acc + num, 0) || 0;
  if (!positive && !negative) return [];
  return [positive, negative];
}
