
document.querySelector(".login form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered account holder name, IBAN number, and password
    const accountHolderName = document.querySelector(".login form input[type='text']").value;
    const ibanNumber = document.querySelector(".login form input[type='text']").value;
    const password = document.querySelector(".login form input[type='password']").value;

    // Simple hardcoded account details for demo
    const validAccountHolderName = "John Doe";
    const validIbanNumber = "1234567890";
    const validPassword = "password";

    // Check if the entered account holder name, IBAN number, and password are valid
    if (accountHolderName === validAccountHolderName && ibanNumber === validIbanNumber && password === validPassword) {
        // Redirect to the main page or perform any action after successful login
        alert("Login successful!");
        // You can use window.location.href = "main.html"; to redirect to the main page
    } else {
        alert("Invalid account holder name, IBAN number, or password. Please try again.");
    }
});
