function validateForm() {
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if fields are empty
    if (username === "" || password === "") {
        errorMessage.style.display = "block";
        return false;  // Prevent form submission
    } else {
        errorMessage.style.display = "none";
        alert("Login successful!");
        return true;  // Allow form submission
    }
}