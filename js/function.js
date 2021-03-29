// 1. function declaration
// function <functionName>() {}

// var returnedValue = add2Numbers(5, 2); // arguments
// console.log("Sum from func defn: " + returnedValue);

// function add2Numbers(num_1, num_2) {
//   // parameter
//   var number_1 = num_1;
//   var number_2 = num_2;
//   var sum = number_1 + number_2;
//   return sum;
// }

// 2. Function Expression
var addTwoNum = function (num_1, num_2) {
    console.log("Inside anonymous function");
    return num_1 + num_2;
};

// console.log("Added Value " + addTwoNum(2, 3));

obj = {
  firstName: "jack",
  rollNumber: 10,
  age: 19,
  isEligibleToVote: true,
  address: {
    houseNumber: "A101",
    streetName: "",
  },
  // getDetail: function() {
  //     return obj.firstName;
  // }
  getAllDetail: getAllDetail,
  friends: ["Jane", "John", "Dale"],
};

function getAllDetail() {
  console.log("testing");
}

console.log(obj.getAllDetail());


console.log(firstName);
var firstName = "Jack";

