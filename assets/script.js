// Assignment Code
var generateBtn = document.querySelector("#generate");


// define each variable first?

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numOnly = "0123456789"
var specChar = "!@#$%^&*()"

// Need to generate functions to provide lowercase, uppercase, numbers and special characters
function getRandomLower() {
  var lowCase = "abcdefghijklmnopqrstuvwxyz";
  var randomLower = lowCase[Math.floor(Math.random() * lowCase.length)];

}

// Need to write code to ask the user if they would like to utilize Lower Case, Capital, Numbers or Special Characters
function confirmLower() {
  var confirmLower= confirm("Would you like to use Lower Case letters in your password?");

}
// Write Function defining generatePassword()
function generatePassword() {
  var 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
