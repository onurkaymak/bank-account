Bank account
init with deposit amount
allow withdrawals and deposits
see balance

Create BankAccount contructor

Describe BankAccounts()

Test 1: Will initialize BankAccount constructor
Code: BankAccount
Expected Result: {}

Describe addAccount()

Test 4: Will add an Account into BankAccount and create an unique Id for the Account object
Code:
const account = new Account("Onur", 5000);
const bank = new BankAccounts();
bank.addAccount(account);
console.log(account);

Expected Result: Account {name: 'Onur'... id: 1}

Describe assignId()

Test 4: Will add an Account into BankAccount and create an unique Id for the Account object (note test is same for addAccount())
Code:
const account = new Account("Onur", 5000);
const bank = new BankAccounts();
bank.addAccount(account);
console.log(account);

Expected Result: Account {name: 'Onur'... id: 1}

Describe Account()

Test 2: Will initialize Account constructor
Code: Account
Expected Result: {}

Test 3: Will add parameters into Account constructor
Code: Account
Expected Result: { name: name, balance: initialDeposit }
