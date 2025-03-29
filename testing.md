# Testing

## Parametrizing

```js
test.each([
  [1, 2, 3],
  [2, 3, 5],
  [3, 5, 8],
])('adds %i + %i to equal %i', (a, b, expected) => {
  expect(a + b).toBe(expected);
});
```
