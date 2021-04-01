var str = "abcdefghijklmnopqrstuvwxyz";

// length of string
// console.log(str.length);

// find a particular value in the string ::: search
// if present will return the index (start from 0)
// else  -1
// console.log(str.indexOf("D"));

// slice
var slicedVal = str.slice(2, 5);
console.log(slicedVal);

// substring : will grab a particular items
var res = str.substr(2, 5);
// console.log(str);
console.log(res);

// replace
var strNew = str.replace("a", "A");
console.log(strNew);

// uppercase lowercase
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// concatenate 2 strings
var str1 = "Jai";
var str2 = " Hind";
console.log(str1.concat(str2));


var str3 = "       asasasasa            ";
console.log(str3.trim());

// charAt()
var str4 = "India";
console.log(str4.charAt(0));
console.log(str4.charCodeAt(0));

var myFriends = "Tom,Harry,Jane,Din,Don";
var myFriendsList = myFriends.split(",");
console.log(myFriendsList);