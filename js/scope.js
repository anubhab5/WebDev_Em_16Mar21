
// scope :: Global, Function

var firstname = "Jane"; // defined in the global scope

function callMe() {
    var lastName = "Doe"; // function scope
    console.log(firstname);
    console.log(lastName);
}

callMe();
console.log(firstname);
console.log(lastName);