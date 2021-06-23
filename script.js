//TODO :
//*1 ask for account
//*2 if account does not exist ask to create account
//*3 ask what the user wants to execute as command
//*4 execute the command
//*4-1 view account
//*4-2 withdraw from the account
//*4-3 deposit in the account

//Account
// const Account = require("/.Account.");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Which account would you like to acces ?", (answer) => {
	console.log(answer);
});
