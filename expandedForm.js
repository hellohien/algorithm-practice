// You will be given a number and you will need to return it as a string in Expanded Form.
// For example:
// 12 --> "10 + 2"
// 70304 --> "70000 + 300 + 4"
function expandedForm(num) {
  let numString = num.toString();
  let arr = [];
  for (let i = numString.length - 1; i >= 0; i--) {
    //access the value in i++ order
    let j = numString.length - 1 - i;
    if (numString[j] != 0) {
      arr.push(`${numString[j]}${"0".repeat(i)}`);
    }
  }
  return arr.join(" + ");
}
