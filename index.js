let readlineSync = require('readline-sync');
let description = "You have been awarded a $1200 stimulus check.\nThe city is on lockdown and you must stock up \non resources to survive quarantine!\n";
let title = "\nWelcome to CoronaTime!\n";
let rules = "Every transaction you make will affect your balance.\n\nSpend wisely!";
let singleBalance = 1200;
let marriedBalance = 2400;
let familyBalance = 2900;
let supermarkets = ["Whole Foods", " Trader Joes", " Publix: "];
let takeout = ['Uber Eats', ' GrubHub', ' Postmates: '];



console.log(title.toUpperCase());
//add dynamic date
console.log(description.toUpperCase());

console.log(rules.toUpperCase());

// let household = readlineSync.question( "\nChoose Your Household: Single, Married, Family: " );
// {
//   limit: /\.txt$/i,
//   limitMessage: 'Sorry, $<lastInput> is not text file.'

let household = readlineSync.question( "\nChoose Your Household: Single, Married, Family: ", {limit:['single','married','family'], limitMessage:'\nChoose one of three!'} );


switch(household.toLowerCase()) {
  case "single":
    console.log( "\nYou're single, and boy does your fridge look EMPTY!\n\nHere are your options:\n" );
    break;
  case "married":
    console.log( "\nYou're married and your partner is hungry!\n" );
    break;
  case "family":
    console.log( "\nYour partner called and Junior needs some diapers!" );
    break;
  default: 
    console.log( "You're single and boy does your fridge look EMPTY!" );
} 



//single section

if (household === "single") {
choices = ['Check Balance', 'Grocery Shopping', 'Order Takeout'];
index = readlineSync.keyInSelect(choices, "What are you going to do?", {cancel: false});
if(choices[index] === 'Check Balance') {
  console.log(`\nYour current balance is: $${singleBalance}\nYour're on your own, kid...`);
  choices.splice(0,1);
  index = readlineSync.keyInSelect(choices, "What are you going to do?", {cancel: false});
} 

if (choices[index] ==='Grocery Shopping') {	
  let storeChoice = readlineSync.question(`\nChoose a grocery store: ${supermarkets}`, {limit:["Whole Foods", "Trader Joes", "Publix"], limitMessage:'\nChoose one of the three options!'});
  console.log(`\nYou chose: ${storeChoice}\n`);
  switch(storeChoice.toLowerCase()){
	case 'whole foods':
	console.log('omg expensive');
	break;
	case 'trader joes':
	console.log('nice and cheap');
	break;
	case 'publix':
	console.log('miami staple');
}
} 

if (choices[index] === 'Order Takeout') {
  let service = readlineSync.question(`\nChoose a delivery service: ${takeout}`);
  console.log(`\nYou chose: ${service.toUpperCase()}`);
}
}


// Married Section

if (household === "married") {
  let choicesMarried = ["Check Balance", "Grocery Shopping", "Order Takeout"];
  let indexMarried = readlineSync.keyInSelect(choicesMarried, "Make Your Choice:  ", {
    cancel: false,
  });
  if (choicesMarried[indexMarried] === "Check Balance") {
    console.log(`\nYour current balance: $${marriedBalance}\n`);
    choicesMarried.splice(0, 1);
    indexMarried = readlineSync.keyInSelect(choicesMarried, "Make Your Choice: ", {
      cancel: false,
    });
  }
if (choicesMarried[indexMarried] === "Grocery Shopping") {
  let storeChoice = readlineSync.question(`\nChoose a grocery store: ${supermarkets}`, {limit:["Whole Foods", "Trader Joes", "Publix"], limitMessage:'\nChoose one of the three options!'});
  console.log(`\nYou chose: ${storeChoice.toUpperCase()}\n`);
} 
if (choicesMarried[indexMarried] === "Order Takeout") {
  let service = readlineSync.question(`\nChoose a delivery service: ${takeout}\n`, {limit:['Uber Eats', 'GrubHub', 'Postmates'], limitMessage:'\nChoose one of the three options!'});
  console.log(`\nYou chose: ${service.toUpperCase()}\n`);
}
}