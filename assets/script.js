
var generateBtn = document.querySelector("#generate");

var alpha = "abcdefghijklmnopqrstuvwxyz"
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var special = "!@#$%^&*?"

//assignment Code
var createThings = ""
var possibleCharacters = ""


//generates the password at random with prompt boxes
function generatePassword() {
  var passwordLength = prompt("How long would you like your password?")
  console.log (passwordLength)
if (isNaN(passwordLength)) {
  alert("Please provide a valid number")
  return ""
}
  var includeUppercase = confirm("Would you like to include uppercase letters?")
  console.log (includeUppercase)
  var includeLowercase = confirm("Would you like to include lowercase letters?")
  console.log (includeLowercase)
  var includeNumbers = confirm("Would you like to include numbers?")
  console.log (includeNumbers)
  var includeSpecial = confirm("Would you like to include Special characters?")
  console.log (includeSpecial)
if (includeUppercase) {
  possibleCharacters += alpha
}

if (includeLowercase) {
  possibleCharacters += caps
}

if (includeNumbers) {
  possibleCharacters += numbers
}

if (includeSpecial) {
  possibleCharacters += special
}

for (var i = 0; i <= passwordLength; i++) {
    var scramble = Math.floor(Math.random() * possibleCharacters.length);
    createThings += possibleCharacters[scramble];

} 

  return createThings;

}


//password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();
}


//event listener to generate button
generateBtn.addEventListener("click", writePassword);


