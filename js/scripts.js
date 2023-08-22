function BankAccounts() {
    this.accounts = {};
};

function Account(name, initialDeposit) {
    this.name = name;
    this.balance = initialDeposit;
};

// const account = new Account("Onur", 5000);
// console.log(account);