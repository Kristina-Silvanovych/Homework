"use strict";
function check(str) {
  let n = 6;
  let c;
  if (str.length > n) {
    let s = str.substr(0, 6);
    let p = str.lastIndexOf(" ", 6);
    if (p != 0) {
      c = str.substr(0, p) + "...";
    } else {
      c = s + "...";
    }
  }
  return c;
}
let str1 = prompt("Enter a sentence");
alert(check(str1));
