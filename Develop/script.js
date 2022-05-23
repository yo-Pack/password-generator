// Assignment code here

//defining generatePassword function
function generatePassword(){
  //on click of genPassword, user will be given a series of prompts and will select criteria for password creation


  //after user is prompted and password is generated to criteria, will be presented with return()
  return("Generated password goes here!");

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
