class Customer {
    constructor(name, accountNum, balance) {
        this.name = name;
        this.accountNum = accountNum;
        this.balance = balance;
    }
    currentBalance() {
        return `Current balance is ${this.balance}`;
    };
    transaction(code, amount) {
        if(code === 0) {
            if(amount > this.balance) {
                return 'insufficient funds';
            } else {
                this.balance = this.balance - amount;
                return `${amount} has been deducted`;
            }
        }
        else if(code === 1) {
            this.balance = this.balance + amount;
            return `${amount} has been added`;
        } else {
            return 'invalid code';
        }
    };
}

var c1 = new Customer('rakesh','SBI123',1500);
console.log(c1.currentBalance());
console.log(c1.transaction(1, 500));
console.log(c1.currentBalance());

var c2 = new Customer('madhuri','SBI124',500);
console.log(c2.currentBalance());
console.log(c2.transaction(0, 700));
console.log(c2.currentBalance());