// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseEl = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseEl = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersEl = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialEl = ["!", "#", "$", "%", "&", "*", "=", "?", "@", "^"];

// Write password to the #password input
function pwCriteria() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // Alert
  alert("We need to ask a few questions regarding what criteria you'd like for your password.");
  var askCount = parseInt(prompt("Choose the length of your password. (Character count must be 8-128 characters)"));
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

  if (!askUpper && !askLower && !askNumbers && !askSpecial) {
    alert("Your password must have at least one special, numeric, lowercase, or uppercase character.");
    return;
  }

  var passwordChoices = {
    length: askCount,
    upperCase: askUpper,
    lowerCase: askLower,
    numeric: askNumbers,
    specialCharacters: askSpecial
  }
  return passwordChoices;

}

function generatePassword() {
  var criteria = pwCriteria();
  console.log(criteria);

  var pwArr = [];
  console.log("Password Array: " + pwArr);

  if (criteria.upperCase) {
    for (i = 0; i < upperCaseEl.length; ++i) {
      pwArr.push(upperCaseEl[i]);
    }
  }

  if (criteria.lowerCase) {
    for (i = 0; i < lowerCaseEl.length; ++i) {
      pwArr.push(lowerCaseEl[i]);
    }
  }

  if (criteria.numeric) {
    for (i = 0; i < numbersEl.length; ++i) {
      pwArr.push(numbersEl[i]);
    }
  }

  if (criteria.specialCharacters) {
    for (i = 0; i < specialEl.length; ++i) {
      pwArr.push(specialEl[i]);
    }
  }

  var newPW = [];
  
  for (let i = 0; i < criteria.length; ++i) {
    var pwScrambler = Math.floor(Math.random() * Math.floor(pwArr.length));
    newPW.push(pwArr[pwScrambler])
  }

  console.log("New Password: " + newPW);

  var pwModded = newPW.join('');
    console.log("Modified password: " + pwModded);

    document.getElementById("password").textContent = pwModded;


}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);