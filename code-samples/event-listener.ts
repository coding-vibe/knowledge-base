document.addEventListener('click', function() {
  console.log(this); // `document` because `this` points to element that was attached
})

const user = {
  firstName: 'Joe',
  logUser() {
    document.addEventListener('click', () => {
      console.log(this.firstName);  // `undefined` because `this` in arrow function points to value in external scope
    })
  }
}
