//variables storing all characters
let upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numbers = ['1','2','3','4','5','6','7','8','9','0'];
let specChars = ['!','@','#','$','%','^','&','*','(',')'];

//variables representing html elements from 'Password Checker'
let password = document.getElementById("passwordTxt");
let lengthCheck = document.getElementById("length");
let upperCheck = document.getElementById("upper");
let lowerCheck = document.getElementById("lower");
let numCheck = document.getElementById("number");
let specCheck = document.getElementById("special"); 
let finalResults = document.getElementById("results");
let image = document.getElementById("image");

//variable used to score the strength of password
let checkCount = 0;

//variables representing html elements from 'Password Generator'
let passwordDisplay = document.getElementById("passwordDisplay");
let generateBtn = document.getElementById("generatePassword");
let passwordLength = document.getElementById("passwordLength");

function checkStrength(){
    //checkcount is reset
    checkCount = 0;
    
    //requirements set to false for simplicity, values displayed to text
    lengthCheck.textContent = "Your password is not at least 8 characters long";
    upperCheck.textContent = "Your password does not contain an uppercase letter";
    lowerCheck.textContent = "Your password does not contain a lowercase letter";
    numCheck.textContent = "Your password does not contain a number";
    specCheck.textContent = "Your password does not contain a special character";    
    
    //requirements set to true if they are actually met, values displayed to text and image is changed
    if(password.value.length >= 8){
        lengthCheck.textContent = "Your password is at least 8 characters long";
        checkCount++;
    }//end if
    if(checkPassword(upperLetters)){
        upperCheck.textContent = "Your password does contain an uppercase letter";
        checkCount++;
    }//end if
    if(checkPassword(lowerLetters) == true){
        lowerCheck.textContent = "Your password does contain a lowercase letter";
        checkCount++;
    }//end if
    if(checkPassword(numbers) == true){
        numCheck.textContent = "Your password does contain an number";
        checkCount++;
    }//end if
    if(checkPassword(specChars) == true){
        specCheck.textContent = "Your password does contain a special character";
        checkCount++;
    }//end if
    
    //program informs user how strong their password is, text color is changed to reflect strength
    switch(checkCount){
        case 0:
        case 1:
            results.textContent = "Your password has a strength value of 1 or less, how have you not been hacked?!";
            results.style.color = "red";
            image.src = "Images/Robot-2.png.png";
            break;
        case 2:
            results.textContent = "Your password has a strength value of 2, I would really recommend changing it";
            results.style.color = "salmon";
            image.src = "Images/Robot-3.png.png";
            break;
        case 3:
            results.textContent = "Your password has a strength value of 3, I would recommend making it stronger";
            results.style.color = "orange";
            image.src = "Images/Robot-4.png.png";
            break;
        case 4:
            results.textContent = "Your password has a strength value of 4, its pretty strong";
            results.style.color = "green";
            image.src = "Images/Robot-5.png.png";
            break;
        case 5:
            results.textContent = "Your password has a strength value of 5, it is very strong. Congradulations!!";
            results.style.color = "orchid";
            image.src = "Images/Robot-6.png.png";
            break;
    }//end switch
}//end checkStrength()

/*program checks if password contains a certain type of character
 * @param characters, the character type the function checks for(i.e. uppercase letters, numbers, etc.)
 * returns boolean, if the character of that type was found*/
function checkPassword(characters) {
    //goes through all characters in array
    for(let i = 0; i < characters.length; i++){
        //stops looking and returns true if the character is found in password
       if(password.value.includes(characters[i])){
           return true;
        }//end if
    }//end for
    
    //returns false by default
    return false;
}//end checkPassword

//generates a password of random characters
function generatePassword(){
    //resets passowrdDisplay and the image
    passwordDisplay.value = "";
    image.src = "Images/Robot-1.png.png";
    
    //adds a random character until password is as long as user's request
    for(let i = 0; i < parseInt(passwordLength.textContent); i++){
        //chooses between uppercase letters, lowercase letters, numbers, and special characters
        switch(Math.floor(Math.random() * 4)){
            //chooses a random character from the chosen character type
            case 0:
                passwordDisplay.value += upperLetters[Math.floor(Math.random() * upperLetters.length)];
                break;
            case 1:
                passwordDisplay.value += lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
                break;
            case 2:
                passwordDisplay.value += numbers[Math.floor(Math.random() * numbers.length)];
                break;
            case 3:
                passwordDisplay.value += specChars[Math.floor(Math.random() * specChars.length)];
                break;
        }//end switch       
    }//end for
}//end generatePassword()


/*increases or decreases requested password length by 1
 * @param value, increaes password length if 1, decreases if -1*/
function changeLength(value){
    //changes password length by 'value' parameter
    value += parseInt(passwordLength.textContent);
    
    //does not decrease length if password length is 1
    if(value > 0){
        passwordLength.textContent = value;
    }//end if
}//end changeLength