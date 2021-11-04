const isValidParantheses = (input) => {
  var lines = input.split('\n');

  const stack = [];

  let inString = false;

  for (const line of lines) {
    for (let i = 0; i < line.length; i++) {
      const char = line.charAt(i);

      if (char === '"' && line.charAt(i - 1) !== `\\`) {
        inString = !inString;
      }

      if (inString) {
        continue;
      }

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
