/*
- Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account.

- You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.

- After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

- Finally, check the amount against your bank account balance to see if you can afford it or not.

- You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""

- You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
*/

const TAX_RATE = 0.0825;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESEHOLD = 200;

let bankBalance = 500;
let amount = 0;

function formatAmount(amount) {
  return '$' + amount.toFixed(2);
}

function calculateTax(price) {
  return price += price * TAX_RATE;
}

function caclulateAdditionalFundsNeeded(bankBalance) {
  let fundsNeeded = PHONE_PRICE - bankBalance;
  return formatAmount(fundsNeeded);
}

while (amount < bankBalance) {
  amount += PHONE_PRICE;
  bankBalance -= amount;
  // can we afford the accessory?
  if (amount < SPENDING_THRESEHOLD) {
    amount += ACCESSORY_PRICE;
    bankBalance -= amount;
  }
}

// can we afford the purchase?
if (amount > bankBalance) {
  console.log(`Sorry, you can\'t afford this phone. You need an additional ${caclulateAdditionalFundsNeeded(bankBalance)}`);
}

// calculate total including taxes
amount += calculateTax(amount);

console.log(`Your total is: ${formatAmount(amount)}. You have ${bankBalance} left in your bank balance.`);
