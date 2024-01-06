
var generateBtn = document.querySelector("#generate");

//var alpha = "abcdefghijklmnopqrstuvwxyz"
//var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//var numbers = "1234567890"
//var special = "!@#$%^&*?"

//assignment Code
var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*?"
var createThings = ""
var number = 10;

//generates the password at random
function generatePassword(length) {
for (var i = 0; i <= length; i++) {
    var scramble = Math.floor(Math.random() * options.length);
    //createThings += options.toString(scramble);
    createThings += scramble;

} 

  return options;

}


//password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = 10;
  passwordText.value = generatePassword(passwordLength);
}


//event listener to generate button
generateBtn.addEventListener("click", writePassword);


