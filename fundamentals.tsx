// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filterList(l: []) {
  return l.filter((el) => typeof el == "number");
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(sheep: []) {
  return sheep.filter((el) => el === true).length;
}
