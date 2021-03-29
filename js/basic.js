// primitive : string number boolean undefined null
// non-primitive : object <<function>>

// variable name is also called identifier
// CREATE IDENTIFIER RULE SET
// a to z, A to Z  0 to 9 $  _
// firstCharacter should not be a number

var roll1nUMBER; // VALID
var my_covidTEST_1234$; // VALID
// var 1rollNumber; // INVALID
var test = 1; // STRING

var firstName; // declaration
console.log("firstName is: " + firstName);

// var rollNumber = -12;
// console.log(rollNumber);
// var rollNumber1 = 12;
// console.log(rollNumber1);
// var isPassed = true; // false
// console.log(isPassed);

console.log(typeof(firstName));


firstName = "Jack"; // initialization
console.log("firstName is: " + firstName);
// typeof operator
console.log(typeof(firstName));

firstName = 12;
console.log("firstName is: " + firstName);
console.log(typeof(firstName));

firstName = false;
console.log("firstName is: " + firstName);
console.log(typeof(firstName));

firstName = null;
console.log("firstName is: " + firstName);
console.log(typeof(firstName)); // bug/ defect=> object

var obj = {}; // object literal // object is a collection of name value pair

obj = {
    firstName: " jack",
    rollNumber: 10,
    age: 19,
    isEligibleToVote: true,
    address: {
        houseNumber: "A101",
        streetName: ""
    },
    getDetail: function() {
        return obj.firstName;
    }
}



console.log(obj);
console.log(typeof(obj));

console.log(obj.age);

var propertyName = "firstName";
console.log(obj[propertyName]);
console.log(obj["firstName"]);
console.log(obj["firstName_1"]);

var student_1 = "Vishnu";

var arr = ["Vishnu", "Sivaram", "Jack", "John"]; // 0 index based collection

// console.log(arr[arr.length - 1]);

console.log(arr["length"]);

