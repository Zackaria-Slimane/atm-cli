//TODO :
//*1 ask for account
//*2 if account does not exist ask to create account
//*3 ask what the user wants to execute as command
//*4 execute the command
//*4-1 view account
//*4-2 withdraw from the account
//*4-3 deposit in the account

//Account
const Account = require('./Account')
const CommandLine = require('./CommandLine')
// const readline = require("readline");

async function main() {
  const accountName = await CommandLine.ask(
    'Which account would you like to acces ?',
  )
  const account = await Account.find(accountName)
  if (account == null) {
    console.log('Cannot find account')
    await promptCreateAccount(accountName)
    accountFound()
  }

  if (account) accountFound()
}

async function promptCreateAccount(accountName) {
  const response = await CommandLine.ask(
    'That account does not exist , would you like to create it ? (yes/no) ',
  )
  if (response === 'yes') {
    return await Account.create(accountName)
  }
}

async function accountFound() {
  console.log('Found account')
  const operation = await CommandLine.ask(
    'What would you like to do ? (view/withdraw/deposit)',
  )
  if (operation === 'view') console.log('You chose view')
  if (operation === 'withdraw') console.log('You chose withdraw')
  if (operation === 'deposit') console.log('You chose deposit')
}

main()

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });
// rl.question("Which account would you like to acces ? ", (answer) => {
// 	console.log(answer);
// 	rl.close();
// });
