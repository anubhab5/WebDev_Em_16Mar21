// "use strict";

var a = 10;
console.log(a);

var x = { p1: 10, p2: 20 };

var pi = 3.14;
console.log(pi);

// delete pi;
console.log(pi);

function callMe(p1, p2) {}

var octal = "010";
console.log(octal);

var obj = {};

Object.defineProperty(obj, "x", { value: 0, writable: false });
// Object.defineProperty
console.log(obj);

obj.x = 1;
console.log(obj);

function abc() {
    "use strict";
}