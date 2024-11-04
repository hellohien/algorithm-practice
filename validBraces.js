function validBraces(braces) {
  const stack = [];
  const braceMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of braces) {
    if (["(", "{", "["].includes(char)) {
      // Push opening braces onto the stack
      stack.push(char);
    } else if ([")", "}", "]"].includes(char)) {
      // If there's no corresponding opening brace or they don't match
      if (stack.length === 0 || stack.pop() !== braceMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
