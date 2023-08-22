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

Account.prototype.depWith = function (trans, amount) {
    if (trans === 'deposit') {
        account.balance += amount;
    } else if (trans === 'withdraw') {
        account.balance -= amount;
    }
}

// const account = new Account("Onur", 5000);
// const bank = new BankAccounts();
// bank.addAccount(account);
