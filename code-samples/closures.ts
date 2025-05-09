const bar = "Gin & tonic";

function foo() {
  console.log(bar + " is a drink");
}

function baz(params) {
  let bar = "Mojito";

  return foo();
}

// Will print "Gin & tonic is a drink"
foo();
baz();
