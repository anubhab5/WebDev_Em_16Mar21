function Person(name, age) {
  this.name = name; // p1.name = "Jack"; // p2.name = "Jane";
  this.age = age; // p1.age = 22 // p2.age = 20;
  //   this.getDetail = function () {
  //     // console.log("Name " + this.name);
  //     return this.name;
  //   };
}

function AdvancedPerson(height) {
  this.height = height;
}

AdvancedPerson.prototype = Person;

var adObj = new AdvancedPerson(12);
adObj.getDetail();

Person.prototype.getDetail = function () {
  return this.name;
};

var p1 = new Person("Jack", 22);
p1.name;
console.log(p1.getDetail());
var p2 = new Person("Jane", 20);
console.log(p2.getDetail());

console.log(p1);
console.log(p2);
