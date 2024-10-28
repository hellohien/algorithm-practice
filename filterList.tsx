// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filterList(l: []) {
  return l.filter((el) => typeof el == "number");
}
