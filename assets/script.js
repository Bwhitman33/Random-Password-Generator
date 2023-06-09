// Assignment Code
var generateBtn = document.querySelector("#generate");


// define each variable first?
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numOnly = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ['"', "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function userChoices() {
    var passwordLength = prompt("Choose a password length between 8 and 128 characters");
  
    if (passwordLength < 7 || passwordLength > 129) {    
      alert("Password must be between 8 and 128 characters in length. Please try again.");
      return null
    }
    var confirmLow = confirm("Would you like to use Lower Case letters in your password?");
    var confirmUp = confirm("Would you like to use Upper Case letters in your password");
    var confirmNum = confirm("Would you like to use Numbers in your password?");
    var confirmSpec = confirm("Would you like to use Special Characters in your password?");
    if (confirmLow == false && confirmUp == false && confirmNum == false && confirmSpec == false) {
      alert("At least one character type must be used")
      return null;
    }
    var user = {
      length: passwordLength,
      lowerCase: confirmLow,
      upperCase: confirmUp,
      numOnly: confirmNum,
      specChar: confirmSpec,
  }
  return user;
}

// Write Function defining generatePassword()
function generatePassword() {
  var choices = userChoices();
  var mustPass = [];
  var possiblePass = [];
  var result = [];
  if (choices.lowerCase) {
    possiblePass = possiblePass.concat(lowerCase);
    mustPass.push(lowerCase[Math.floor(Math.random()*lowerCase.length)]);
  }
  if (choices.upperCase) {
    possiblePass = possiblePass.concat(upperCase);
    mustPass.push(lowerCase[Math.floor(Math.random()*upperCase.length)]);
  }
  if (choices.numOnly) {
    possiblePass = possiblePass.concat(numOnly);
    mustPass.push(lowerCase[Math.floor(Math.random()*numOnly.length)])
  }
  if (choices.specChar) {
    possiblePass = possiblePass.concat(specChar);
    mustPass.push(lowerCase[Math.floor(Math.random()*specChar.length)])
  }
  for (var i = 0; i < choices.length; i++) {
    var possible = possiblePass[Math.floor(Math.random()*possiblePass.length)];
    result.push(possible);
  }
  for (var i = 0; i < mustPass.length; i++) {
    result[i] = mustPass[i];
  }
    return result.join('');  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
