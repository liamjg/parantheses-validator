const { expect } = require('@jest/globals');
const isValidParantheses = require('./valid-parantheses');

test('Test string true', () => {
  const testStr = '(()())';

  const result = isValidParantheses(testStr);

  expect(result).toBeTruthy();
});

test('Test string false', () => {
  const testStr = '(()';

  const result = isValidParantheses(testStr);

  expect(result).toBeFalsy();
});

test('Test lisp code true', () => {
  const testStr = `
  (defun csg-intersection-intersect-all (obj-a obj-b)
   (lambda (ray)
     (flet ((inside-p (obj) (lambda (d) (inside-p obj (ray-point ray d)))))
       (merge 'fvector
              (remove-if-not (inside-p obj-b) (intersect-all obj-a ray))
              (remove-if-not (inside-p obj-a) (intersect-all obj-b ray))
              #'<))))`;

  const result = isValidParantheses(testStr);

  expect(result).toBeTruthy();
});

test('Test lisp code true w/ string', () => {
  const testStr = `
  (write-line "Test a )string")
  (defun csg-intersection-intersect-all (obj-a obj-b)
   (lambda (ray)
     (flet ((inside-p (obj) (lambda (d) (inside-p obj (ray-point ray d)))))
       (merge 'fvector
              (remove-if-not (inside-p obj-b) (intersect-all obj-a ray))
              (remove-if-not (inside-p obj-a) (intersect-all obj-b ray))
              #'<))))`;

  const result = isValidParantheses(testStr);

  expect(result).toBeTruthy();
});

test('Test lisp code true w/ string', () => {
  const testStr = `
  (write-line "Test a \")string")
  (defun csg-intersection-intersect-all (obj-a obj-b)
   (lambda (ray)
     (flet ((inside-p (obj) (lambda (d) (inside-p obj (ray-point ray d)))))
       (merge 'fvector
              (remove-if-not (inside-p obj-b) (intersect-all obj-a ray))
              (remove-if-not (inside-p obj-a) (intersect-all obj-b ray))
              #'<))))`;

  const result = isValidParantheses(testStr);

  expect(result).toBeTruthy();
});

test('Test lisp code true w/ comment', () => {
  const testStr = `
  (defun csg-intersection-intersect-all (obj-a obj-b)
   (lambda (ray)
     (flet ((inside-p (obj) (lambda (d) (inside-p obj (ray-point ray d))))) ; test (
       (merge 'fvector
              (remove-if-not (inside-p obj-b) (intersect-all obj-a ray))
              (remove-if-not (inside-p obj-a) (intersect-all obj-b ray))
              #'<))))`;

  const result = isValidParantheses(testStr);

  expect(result).toBeTruthy();
});

test('Test lisp code false', () => {
  const testStr = `
  (
  (defun csg-intersection-intersect-all (obj-a obj-b)
   (lambda (ray)
     (flet ((inside-p (obj) (lambda (d) (inside-p obj (ray-point ray d)))))
       (merge 'fvector
              (remove-if-not (inside-p obj-b) (intersect-all obj-a ray))
              (remove-if-not (inside-p obj-a) (intersect-all obj-b ray))
              #'<))))`;

  const result = isValidParantheses(testStr);

  expect(result).toBeFalsy();
});
