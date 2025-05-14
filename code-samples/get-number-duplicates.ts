const numbers = [1, 2, 1, 4, 2, 3, 5, 6, 6, 5, 1, 5, 7, 8];

function getDuplicates() {
  const numbersCount = numbers.reduce(
    (acc, num) => ({
      ...acc,
      [num]: num in acc ? acc[num] + 1 : 1,
    }),
    {},
  );

  const duplicates = Object.entries(numbersCount)
    .filter(([, value]) => value > 1)
    .map(([key]) => parseInt(key));

  return duplicates;
}

console.log(getDuplicates());
