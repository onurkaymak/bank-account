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


BankAccounts.prototype.depWith = function (trans, amount, id) {
    const account = bank.findAccount(id);

    if (trans === 'deposit') {
        account.balance += amount;
    } else if (trans === 'withdraw') {
        account.balance -= amount;
    }
    return account.balance;
}



BankAccounts.prototype.findAccount = function (id) {
    if (this.accounts[id] !== undefined) {
        return this.accounts[id];
    }
    return false;
};



function Account(name, initialDeposit) {
    this.name = name;
    this.balance = initialDeposit;
};


// const bank = new BankAccounts();

// const account1 = new Account("Onur", 5000);
// bank.addAccount(account1);

// const account2 = new Account("Paul", 15000);
// bank.addAccount(account2);


// bank.depWith("deposit", 1000, 1);
// bank.depWith("deposit", 100000, 2);
// console.log(account2)

