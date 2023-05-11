// Create an object for the ATM
let atm = {
  // The account balance
  balance: 1000,

  // The functions for the ATM
  deposit(amount) {
    this.balance += amount;
    alert("Deposit successful!");
  },

  withdraw(amount) {
    if (this.balance < amount) {
      alert("Insufficient funds!");
      return;
    }

    this.balance -= amount;
    alert("Withdrawal successful!");
  },

  query() {
    alert("Your balance is " + this.balance);
  }
};

// Start the ATM
atm.query();

// Prompt the user for a transaction
let transaction = prompt("What would you like to do? (deposit, withdraw, query)");

// Switch on the transaction type
while (transaction !== "exit") {
  switch (transaction) {
    case "deposit":
      {
        let amount = parseInt(prompt("How much would you like to deposit?"));
        atm.deposit(amount);
      }
      break;
    case "withdraw":
      {
        let amount = parseInt(prompt("How much would you like to withdraw?"));
        atm.withdraw(amount);
      }
      break;
    case "query":
      atm.query();
      break;
    case "exit":
      break;
    default:
      alert("Invalid transaction.");
  }
  transaction = prompt("What would you like to do? (deposit, withdraw, query, exit)");
}