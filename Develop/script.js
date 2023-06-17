// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

function generatePassword(){
  var length = prompt("Enter a password length: " )
  if(length < 8 || length > 128){
    alert("ERROR!")
  }
  var lowerCase = prompt("Lowercase? Y/N")
  
  if (lowerCase.toLowerCase() == 'y'){
    var upperCase = prompt("Uppercase? Y/N")
  }

  

  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
