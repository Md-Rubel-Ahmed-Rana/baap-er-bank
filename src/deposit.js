
// add event listener to the deposit button
const depositBtn = document.getElementById("deposit-btn");

depositBtn.addEventListener("click", () => {
    // get the deposit amount
    const depositField = document.getElementById("deposit");
    const newDepositAmount = parseFloat(depositField.value);

    // clear the input field
    depositField.value = " ";
    
    if (isNaN(newDepositAmount)) {
    alert("Please provide a valid number");
    return;
   }

    // get the deposit total element;
    const depositTotalElement = document.getElementById("total-deposit");
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // add the deposit amount to the deposit element
    depositTotalElement.innerText = currentDepositTotal;


    // get balance total 
    const totalBalance = document.getElementById("total-balance");
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentTotalBalance = previousTotalBalance + newDepositAmount;

    // Add the new deposit to the Total Balance
    totalBalance.innerText = currentTotalBalance;

    
})





