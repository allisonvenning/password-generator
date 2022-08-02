// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max);
}


function getRandomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  var userInput = window.prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
  var passwordLength = parseInt(userInput);

  if(isNaN(passwordLength)) {
    window.alert("That is not a number. Please try again");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    return;
  }

  var includesNumbers = window.confirm("Would you like your password to include numbers?");
  var includesSpecialCharacters = window.confirm("Would you like your password to include special characters?");
  var includesLowercase = window.confirm("Would you like your password to include lowercase letters?");
  var includesUppercase = window.confirm("Would you like your password to include uppercase letters?");

  var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharactersList = ["!", "@", "$", "%", "^", "&", "*"];
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var UppercaseList = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var characterOptions = [];

  if (includesNumbers === true) {
    characterOptions.push(numbersList)
  }

  if (includesSpecialCharacters === true) {
    characterOptions.push(specialCharactersList)
  }

  if (includesLowercase === true) {
    characterOptions.push(lowercaseList)
  }

  if (includesUppercase === true) {
    characterOptions.push(UppercaseList)
  }
  var generatedPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomItem = characterOptions[randomInt(0, characterOptions.length - 1)];
  }

  if (characterOptions.length === 0) {
    characterOptions.push(lowercaseList);
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(characterOptions);
    var randomChar = getRandomItem(randomList);
    generatedPassword += randomChar;
  }

  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
