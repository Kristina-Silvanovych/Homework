"use strict";
let tick = true;
let t;
let counter = 0;
function ticker(time) {
  if (tick) {
    document.write(counter);
    tick = false;
  } else {
    document.write(counter);
    tick = true;
  }
  counter++;
  if (counter == time) {
    clearInterval(t);
  }
}
let time = prompt("Input time");
t = setInterval(ticker, 1000, time);
//t = setInterval(ticker.bind(this, time), 1000);
