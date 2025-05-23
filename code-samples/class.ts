//Rewrite to class

class Clock {
  timer = null;
  
  constructor(template) {
    this.template = template;
  };
  
  render() {
    let date = new Date();
  
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
  
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
  
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
  
    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
    return this;
  }
  
  stop() {
    clearInterval(this.timer);
    return this;
    };
  
  start() {
     this.render();
     this.timer = setInterval(()=> this.render, 1000);
     return this;
    };
} 
  
  let clock = new Clock('h:m:s');
  clock.start();



