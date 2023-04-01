// Assignment Code
var generateBtn = document.querySelector("#generate");


// define each variable first?
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numOnly = "0123456789";
var specChar = "!@#$%^&*()";

// Need to generate functions to provide random lowercase, uppercase, numbers and special characters
function getRandomLower() {
  var lowCase = "abcdefghijklmnopqrstuvwxyz";
  return lowCase[Math.floor(Math.random() * lowCase.length)];
}

function getRandomUpper() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomNumber() {
  var numOnly = "0123456789";
  return numOnly[Math.floor(Math.random() * numOnly.length)];
}

function getRandomSpec() {
  var specChar = "!@#$%^&*()";
  return specChar[Math.floor(Math.random() * specChar.length)];
}

// Need to write code to ask the user if they would like to utilize Lower Case, Capital, Numbers or Special Characters
function confirmLower() {
  var confirmLow= confirm("Would you like to use Lower Case letters in your password?");
  if (confirmLow == true) {
      return true; 
  }
  else if (confirmLow == false) {
    return false;
  }
}

function confirmUpper() {
  var confirmUp= confirm("Would you like to use Upper Case letters in your password");
  if (confirmUp == true) {
    return true;
  }
  else if (confirmUp == false) {
    return false;
  }
}

function confirmNumber() {
  var confirmNum= confirm("Would you like to use Numbers in your password?");
  if (confirmNum == true) {
    return true;
  }
  else if (confirmNum == false)
    return false;
}

function confirmSpecial() {
  var confirmSpec= confirm("Would you like to use Special Characters in your password?");
  if (confirmSpec == true) {
    return true;
  }
  else if (confirmSpec == false) {
    return false;
  }
}

// Write Function defining generatePassword()
function generatePassword() {
  var conLow= confirmLower();
  var conUpper = confirmUpper();
  var conNum = confirmNumber();
  var conSpec = confirmSpecial();
  var lengthOfPass = getPasswordLength();

  // need to set parameters in this function to get a password generated given all of the above criteria is met
  if (conLow === true && conUpper === true && conNum === true && conSpec === true && lengthOfPass === true) {
   
    return password;
  }
    
}

// Need to write function to let the user set a password length between 8 and 128 characters
var getPasswordLength = function() {
    var passwordLength = prompt("Choose a password length between 8 and 128 characters");

    if (passwordLength > 7 && length < 129)
    {
      return true;
    }
    else {
      alert("Password must be between 8 and 128 characters in length. Please try again.")
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
