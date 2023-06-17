// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

function generatePassword(){
  var passLength = prompt("Enter a password length: " )
  if(passLength < 8 || passLength > 128){
    alert("ERROR!")
  }
  var lowerCase = prompt("Lowercase? Y/N")
  
  if (lowerCase.toLowerCase() == 'y'){
    var upperCase = prompt("Uppercase? Y/N")
  }

  var specialChar = prompt("Special characters? Y/N?")

  var specialString = ""
  for(var i=0; i < passLength; i++){
    specialString = specialString + String.fromCharCode(Math.random(33,47))
  }
  return specialString
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
