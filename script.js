// Assignment Code
var generateBtn = document.querySelector("#generate");
// var lowerCaseEl = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperCaseEl = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numbersEl = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var specialEl = ["!", "#", "$", "%", "&", "*", "=", "?", "@", "^"];
var lengthEl = document.querySelector("askCount");
var uppercaseEl = document.querySelector("askUpper");
var lowercaseEl = document.querySelector("askLower");
var numbersEl = document.querySelector("askUpper");
var lowercaseEl = document.querySelector("askUpper");
// var criteria = {
//   "lowercase": "abcdefghijklmnopqrstuvwxyz",
//   "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   "numbers": "0123456789",
//   "special": "!#$%*=?@^"
// }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// Alert
  alert("We need to ask a few questions regarding what criteria you'd like for your password.");
  var askCount = prompt("Choose the length of your password. (Character count must be 8-128 characters)");
// Question about length
  if (askCount < 8 || askCount > 128) {
    alert("Please choose between 8 and 128 characters");
    console.log("Character count not between 8-128.");
  }
// Questions about criteria
  var askUpper = confirm("Would you like there to be uppercase letters? (A, B, C...)");
  var askLower = confirm("Would you like there to be lowercase letters? (a, b, c...)");
  var askNumbers = confirm("Would you like there to be numbers? (1, 2, 3...)");
  var askSpecial = confirm("Would you like there to be special characters? ($, !, ?...)");

  if (askUpper && askLower && askNumbers && askSpecial) {
    console.log("All");
  }

  if (askUpper === false && askLower && askNumbers && askSpecial) {
    console.log("Lower, Numbers, Special");
  }

  if (askUpper === false && askLower === false && askNumbers && askSpecial) {
    console.log("Numbers, Special");
  }

  if (askUpper === false && askLower && askNumbers && askSpecial) {
    console.log("Lower, Numbers, Special");
  }

  
}

function generatePassword() {
  card-body.replace("Password");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);