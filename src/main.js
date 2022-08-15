
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click" , () => {
    // getiing the values of input field
    const emailField = document.getElementById("user-email");
    const passwordField = document.getElementById("user-password");

    const userEmail = emailField.value;
    const userPassword = passwordField.value;
    if( userEmail === "sontan@baap.com" && userPassword === "secret"){
        window.location.href = "account.html"
    } else{
        alert("Eta tor baaaper account na");
    }
})