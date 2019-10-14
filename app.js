//scope issues, not the most logical layout. userInput would make more sense as local not global.

let pin = 3045;
let userInput;
let userBalance = 1000;
let noPinAttempts = 0;
let noPinAttemptsAllowed = 3;

// in hindsight I could have given this a better initial function name, such as "cash machine" and drawn all the other functions from here.
 const checkPin =() => {
    noPinAttempts++;
    console.log (noPinAttempts);
    console.log (noPinAttemptsAllowed)
    userInput = prompt ("Please enter your pin number:")
    console.log (userInput);
     if (userInput == pin) {
        serviceOptions()
      }
     else if (noPinAttempts >= noPinAttemptsAllowed) {
       alert ("You have entered an incorrect pin too many times. This account is now locked, please call your branch. ")
     }
     else {
         let noPinAttemptsRemaining = noPinAttemptsAllowed - noPinAttempts;
         alert (`That is not correct. Please try again you have ${noPinAttemptsRemaining} attempts left.`);
         checkPin();
       }
}

//originally, serviceOptions was just part of the checkPin function but this made it difficult to ask if the user would like further services.
const serviceOptions = () =>{
    userInput = prompt ("Your pin is correct. Please choose a service. \n1. Withdraw cash \n2. Deposit cash \n3. Change pin ")
            if (userInput == 1){
              withdrawFunction()
            }
            else if (userInput == 2){
              depositCash ();
            }
            else if (userInput == 3) {
              changePin();
            }
            else {
              alert ("That is not a valid option, please choose from the options.")
              serviceOptions();
            }
}

const withdrawFunction = () => {
    userInput = prompt ("How much would you like to withdraw? \n1. £5 \n2. £10 \n3. £30")
    if (userInput == 1) {
        userBalance -= 5
    }
    else if (userInput == 2) {
        userBalance -= 10
    }
    else if (userInput == 3) {
        userBalance -= 30
    }
    else{
        alert ("That is an invalid option!")
        withdrawFunction();
    }
    userInput = prompt (`Your balance is now £${userBalance}. Would you like another service? \n1. Yes \n2. No`)
      if (userInput == 1) {
        serviceOptions()
      }
      else {
        "Thank you, have a great day!"
      }
 }

 // I had refered to all the user data inputted with the same variable name "userInput" which caused problems later on and the depositCash function displayed one of these problems so I updated the variable name.
 const depositCash = () =>{
   let depositAmount = 0;
   console.log ("deposit cash function is working");
   userInput = prompt ("How much would you like to deposit?")
      if (userInput == parseInt(userInput)){
        depositAmount = parseInt(userInput)
        userBalance = userBalance + depositAmount;
        userServiceOption = prompt (`Thank you, you have now made a deposit of £${depositAmount} and your balance is £${userBalance}. Would you like another service? \n1. Yes \n2. No"`)
           if (userServiceOption == 1) {
             serviceOptions()
           }
           else {
             alert ("Thank you for your visit, have a great day!")
           }
        }
      else {
        alert ("Please enter a valid number.")
        depositCash();
      }
 }


//The changePin function allows a user to choose a new pin. It must consist of 4 digits, shorter/longer and letters aren't allowed.
 const changePin = () => {
     console.log ("change pin is working");
     userInput = prompt ("Please type your new pin, this should consist of four digits: ");
     if (userInput.length == 4 && userInput == parseInt(userInput)){
         newPin = userInput;
         console.log (newPin);
         userInput = prompt ("Your pin has now been successfully changed. Would you like another service? \n1. Yes \n2. No")
           if (userInput == 1) {
             serviceOptions()
           }
           else {
            alert ("Thank you for your visit, have a great day!")
           }
     }
     else if (userInput.length > 4 || userInput.length < 3 || userInput != parseInt(userInput)) {
         alert ("Your pin should be four digits long, please try again")
         changePin();
     }
     else {
         alert ("Oops. There appears to have been an error, please come back later.")
     }
    }

//initiates the cashmachine
checkPin ();

//withdrawFunction ();

// changePin();
