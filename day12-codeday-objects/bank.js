var customer = {
    accountNumber : '0123456789',
    name: 'Vivek',
    balance: '1250',
    currentBalance: function() {
        return `Current balance is ${this.balance}`;
    },
    transaction: function(amount, code) {
        if(code === 0) { // 0 to withdraw
            if(amount > this.balance) {
                return `Insufficient funds to withdraw.`;
            } else {
                this.balance = this.balance - amount;
                return `INR ${amount} has been withdrawn.`;
            }
        } else if(code === 1) { // 1 to deposit
            this.balance = this.balance + amount;
            return `INR ${amount} has been deposited.`;
        } else {
            return `Invalid Input.`
        }
    }
}

console.log(customer.currentBalance());
console.log(customer.transaction(1500,0));
console.log(customer.transaction(250,0));
console.log(customer.transaction(1000,1));
console.log(customer.currentBalance());