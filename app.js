function generate() {
   
var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWSYZ';

var chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

var passwordLength = Number(document.getElementById("lengthInput").value);

var output = document.getElementById("passwordOutput");

if (!passwordLength || passwordLength < 1) {
  output.value = "Enter valid length!";
  return;
}

var password = '';

password += alphabets[Math.floor(Math.random()*alphabets.length)];

for(var i = 1; i < passwordLength; i++){

    password+=chars[Math.floor(Math.random()*chars.length)];
}

output.value = password;
    
}


function clearAll() {
    document.getElementById("lengthInput").value = "" ;
    document.getElementById("passwordOutput").value = "" ;
}

