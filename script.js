// Assignment Code
// var generateBtn = document.querySelector("#generate");
// var lowerCaseEl = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperCaseEl = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numbersEl = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var specialEl = ["!", "#", "$", "%", "&", "*", "=", "?", "@", "^"];
var lengthEl = document.querySelector("askCount");
var uppercaseEl = document.querySelector("askUpper");
var lowercaseEl = document.querySelector("askLower");
var numbersEl = document.querySelector("askUpper");
var lowercaseEl = document.querySelector("askUpper");
var criteria = {
  "lowercase": "abcdefghijklmnopqrstuvwxyz",
  "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "numbers": "0123456789",
  "special": "!#$%*=?@^"
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  alert("We need to ask a few questions regarding what criteria you'd like for your password.");
  var askCount = prompt("Choose the length of your password. (Character count must be 8-128 characters)");

  if (askCount < 8 || askCount > 128) {
    alert("Please choose between 8 and 128 characters");
    console.log("Character count not between 8-128.")
    return askCount;
  }

  else {
    console.log("Good job");
  }

  var askUpper = confirm("Would you like there to be uppercase letters? (A, B, C...)");

  if (askUpper){
    console.log("Uppercase");
  }

  var askLower = confirm("Would you like there to be lowercase letters? (a, b, c...)");

  if (askLower){
    console.log("Lowercase");
  }

  var askNumbers = confirm("Would you like there to be numbers? (1, 2, 3...)");

  if (askNumbers){
    console.log("Numbers");
  }

  var askSpecial = confirm("Would you like there to be special characters? ($, !, ?...)");

  if (askSpecial){
    console.log("Special");
  }

}

function generatePassword() {
  console.log("generate password");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);