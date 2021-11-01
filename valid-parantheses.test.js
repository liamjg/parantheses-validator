const { expect } = require('@jest/globals');
const isValidParantheses = require('./valid-parantheses');

test('Test true', () => {
  const testStr = '(()())';

  const result = isValidParantheses(testStr);

  expect(result).toBeTruthy();
});

test('Test false', () => {
  const testStr = '(()';

  const result = isValidParantheses(testStr);

  expect(result).toBeFalsy();
});
