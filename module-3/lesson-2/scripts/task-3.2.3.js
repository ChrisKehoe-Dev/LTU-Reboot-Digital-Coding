/* EXAMPLE */
/*
function greet(greeting, name) {
  return greeting + ' ' + name;
}

var message = greet('Hello', 'Luke');
    console.log( message ); // Output: Hello Luke
*/
/* EXAMPLE */

// ADD YOUR CODE BELOW HERE

// ADD YOUR CODE ABOVE HERE


function fullName(firstName, lastName) {
  var fName = firstName + " " + lastName
  //document.write("<p>My full name is " + fName + ".</p>")
  return fName
}

var firstNm = "Bernard";
var lastNm = "McGinty";

var mR = fullName (firstNm,lastNm) 

var firstNm = "Alison";
var lastNm = "Alexander";
var mRs = fullName (firstNm,lastNm) 



document.write("<p>My full name is " + mR + " and I am married to " + mRs + ".</p>")