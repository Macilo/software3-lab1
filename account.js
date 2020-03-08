'use strict'
const account = {
  balance: 0,
  totalWithdrawals: 0,
  totalDeposits: 0,
  deposit: function (amount) {
    this.totalDeposits += amount
    this.balance += amount
  },
  withdraw: function (amount) {
    if (this.balance >= amount) {
      this.totalWithdrawals += amount
      this.balance -= amount
    } else {
      console.log(`Insufficient funds: your account has R${this.balance}! and you are trying to withdraw R${amount}`)
    }
  },
  getDeposits: function () {
    return this.totalDeposits
  },
  getWithdrawals: function () {
    return this.totalWithdrawals
  },

  transactions: function () {
    return `This account has a balance of R${this.balance}. There have been deposits totalling R${this.getDeposits()} and
        withdrawals totalling R${this.getWithdrawals()}`
  }

}

account.deposit(300)
account.withdraw(400)
// account.withdraw(100)
// account.deposit(1000)
console.log(account.transactions())
