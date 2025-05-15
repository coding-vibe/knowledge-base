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
