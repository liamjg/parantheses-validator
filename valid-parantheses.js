const isValidParantheses = (input) => {
  const stack = [];

  for (const char of input) {
    if (char === '(') {
      stack.push(')');
    } else if (char === ')' && stack.pop() !== char) {
      return false;
    }
  }

  // if stack isn't empty, parantheses are unclosed
  return stack.length === 0;
};

module.exports = isValidParantheses;
