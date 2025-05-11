Promise.resolve(4).then((result) => console.log(result));

setTimeout(() => {
  console.log(3);
});

console.log(1);

new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  });
}).then((result) => console.log(result));
