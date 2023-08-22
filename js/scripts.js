function BankAccounts() {
    this.accounts = {};
    this.currentId = 0;
};


BankAccounts.prototype.addAccount = function (account) {
    account.id = this.assignId();
    this.accounts[account.id] = account;
};



BankAccounts.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

function Account(name, initialDeposit) {
    this.name = name;
    this.balance = initialDeposit;
};


BankAccounts.prototype.depWith = function (trans, amount) {
    if (trans === 'deposit') {
        account.balance += amount;
    } else if (trans === 'withdraw') {
        account.balance -= amount;
    }
    return account.balance;
}


// const bank = new BankAccounts();

// const account1 = new Account("Onur", 5000);
// bank.addAccount(account1);

// const account2 = new Account("Paul", 15000);
// bank.addAccount(account2);


// bank.depWith("deposit", 1000, 1);
// bank.depWith("deposit", 100000, 2);
// console.log(account2)

