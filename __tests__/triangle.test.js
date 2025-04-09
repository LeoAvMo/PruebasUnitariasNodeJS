// __tests__/triangle.test.js

const triangle = require('../triangle');

test('should return scalene for sides 10, 8, 9', () => {
  expect(triangle.triangleType(10, 8, 9)).toBe('Scalene');
});

test('should return not a triangle for sides 5, 1, 1', () => {
  expect(triangle.triangleType(5, 1, 1)).toBe('Invalid triangle!');
});

test('should return isosceles for sides 10, 10, 9', () => {
  expect(triangle.triangleType(10, 10, 9)).toBe('Isosceles');
});

test('should return equilateral for sides 10, 10, 10', () => {
  expect(triangle.triangleType(10, 10, 10)).toBe('Equilateral');
});

test('should return not a triangle for sides 10, 5, -1', () => {
  expect(triangle.triangleType(10, 5, -1)).toBe('Invalid triangle!');
});

test('should return not a triangle for sides 0, 5, 1', () => {
  expect(triangle.triangleType(0, 5, 1)).toBe('Invalid triangle!');
});