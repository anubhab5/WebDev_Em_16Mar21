// // let const

// let myName = "Jack";
// console.log(myName);
// myName = "Jane";
// console.log(myName);
// const lastName = "Doe";
// console.log(lastName);
// // lastName = "Potter";
// // console.log(lastName);

// var abc = "asas";
// var abc = "asas";

// var test = ";asas";

// function callMe(num) {
//   let firstName = "Jane";
//   var test = ";asas"; // {}

//   if (num % 2 == 0) {
//     let firstName = "abc";
//     console.log("firstName " + firstName);
//   }
//   console.log("firstName " + firstName);
// }

// callMe(12);

// // console.log(tes);

// Arrow function
var obj = {
  getDetail: (num) => console.log(num * 3),
};
obj.getDetail(12);

class Person {
  name;
  age;
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
}

let p1 = new Person("Jack", 20);
console.log(p1);
