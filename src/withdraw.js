
// get the with button

const withdrawBtn = document.getElementById("withdraw-btn");

withdrawBtn.addEventListener("click", () => {
   const withdrawField = document.getElementById("withdraw");
   const newWithdrawAmountString = withdrawField.value;
   const newWithdrawAmount = parseFloat(newWithdrawAmountString);

   // clear the input field
   withdrawField.value = " ";
   
   if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
   }

   const withdrawTotalElement = document.getElementById("total-withdraw");
   const previousWithdrawTotalString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   

   // get the previous total amount
   const previousTotalAmount = document.getElementById("total-balance");
   const previousTotalAmountString = previousTotalAmount.innerText;
   const previousTotalBalance = parseFloat(previousTotalAmountString);


   

   if (newWithdrawAmount > previousTotalBalance) {
    alert("Withdraw Balance must be less than Total Balance");
    return;
   }

   const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
   // set the withdraw total to the withdraw element
   withdrawTotalElement.innerText = currentWithdrawTotal;

   const newTotalBalance = previousTotalBalance - newWithdrawAmount

   previousTotalAmount.innerText = newTotalBalance;

   
})

