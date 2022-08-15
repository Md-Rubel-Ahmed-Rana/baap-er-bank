
// add event listener to the deposit button
const depositBtn = document.getElementById("deposit-btn");

depositBtn.addEventListener("click", () => {
    // get the deposit amount
    const depositField = document.getElementById("deposit");
    const newDepositAmount = depositField.value;

    // get the deposit total element;
    const depositTotalElement = document.getElementById("total-deposit");
    const previousDepositTotal = depositTotalElement.innerText
    
    // add the deposit amount to the deposit element]
    totalDeposit.innerText = depositAmount;
    depositField.value = " "
})





