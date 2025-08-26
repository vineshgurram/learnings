// Level 5 – Real-world Style

// Create a BankAccount(owner, balance) constructor.

// Add deposit() and withdraw() using prototype.

// Extend into SavingsAccount(owner, balance, interestRate) with method addInterest().

const currentBalance = 25000;
const depositAmount = 10000;

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return `${amount} deposited. New Balance: ${this.balance}`;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return `Insufficient funds. Current Balance: ${this.balance}`;
        }
        this.balance -= amount;
        return `${amount} withdrawn. New Balance: ${this.balance}`;
    }
}

class SavingsAccount extends BankAccount {
    constructor(owner, balance, interestRate) {
        super(owner, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        const interest = (this.balance * this.interestRate) / 100;
        this.balance += interest;
        return `Your Total Balance with Interest is ${this.balance}`
    }
}

// const vinesh = new BankAccount("Vinesh", currentBalance);
const vinesh = new SavingsAccount("Vinesh", currentBalance, 20)
console.log(vinesh);
console.log(vinesh.deposit(10000));
console.log(vinesh.withdraw(5000));
console.log(vinesh.addInterest());
