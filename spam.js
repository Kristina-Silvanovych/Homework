"use strict";
//let str1 = "Hello spam!";
//let str2 = "Hello world!";
let spam = "spam";

function check(str) {
  str = str.toLowerCase();
  let p = str.indexOf("spam");
  for (var count = 0; p != -1; count++) {
    if (str.indexOf("spam") != -1) {
      let n = str.replace("spam", "***");
      p = str.indexOf("spam", p + 4);
      return true, n;
    } else {
      return false;
    }
  }
  //return str.search(spam.toLowerCase()) >= 0 ? true : false;
}
let str1 = prompt("Enter a sentence");
alert(check(str1));
