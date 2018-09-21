class Customer {
    constructor(name, accountNum, balance) {
        this.name = name;
        this.accountNum = accountNum;
        this.balance = balance;
    }
    currentBalance() {
        return `Current balance is ${this.balance}`;
    }
    transaction(code, amount) {
        if(code === 0) {
            if(amount > this.balance) {
                return 'insufficient funds';
            } else {
                this.balance = this.balance - amount;
                return `${amount} has been deducted`;
            }
        } else if(code === 1) {
            this.balance = this.balance + amount;
            return `${amount} has been added`;
        } else {
            return 'invalid code';
        }
    };
}

module.exports = {
    Customer
}