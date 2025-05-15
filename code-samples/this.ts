[Calculator](https://learn.javascript.ru/task/calculator)

let calculator = {
  read: function(a,b) { 
    this.a=a;
    this.b=b;
  },
  sum: function() {
    return this.a+this.b
  },
  mul: function() {
    return this.a*this.b
  },
};

calculator.read(1, 2);
alert( calculator.sum() );
alert( calculator.mul() );

[Chains call](https://learn.javascript.ru/task/chain-calls)

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();

[Fix a function that loses "this"](https://learn.javascript.ru/task/question-use-bind )
function askPassword(ok, fail) {
  let password = prompt("Пароль?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Іван',

  loginOk() {
    alert(`${this.name} увійшов`);
  },

  loginFail() {
    alert(`${this.name} виконав невдалу спробу входу`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


