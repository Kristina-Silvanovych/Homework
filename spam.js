"use strict";
//let str1 = "Hello spam!";
//let str2 = "Hello world!";
function check(str) {
  str = str.toLowerCase();
    let n = str.replace(/spam/g, "***");
    return n;
  //return str.search(spam.toLowerCase()) >= 0 ? true : false;
}
let str1 = prompt("Enter a sentence");
alert(check(str1));

