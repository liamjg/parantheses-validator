const isValidParantheses = (input) => {
  var lines = input.split('\n');

  const stack = [];

  for (const line of lines) {
    for (const char of line) {
      if (char === ';') {
        // stop parsing the line if we hit ; since that means we are in a comment
        break;
      } else if (char === '(') {
        stack.push(')');
      } else if (char === ')' && stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

module.exports = isValidParantheses;
