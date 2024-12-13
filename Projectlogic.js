
// Simulated Order Data (Mock Data)
 mockOrderData = {
    "12345": {
        status: "Shipped",
        location: "Kukas Jaipur",
        estimatedArrival: "2024-11-15"
    },
    "67890": {
        status: "In Transit",
        location: "New York",
        estimatedArrival: "2024-11-12"
    },
    "11121": {
        status: "Delivered",
        location: "Nims University",
        estimatedArrival: "2024-11-05"
    }
};

// Handle Form Submission for Tracking
document.getElementById('track-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    
    const orderId = document.getElementById('order-id').value;  // Get order ID entered by user
    
    // Check if the order ID exists in mock data
    if (mockOrderData[orderId]) {
        // Display order status
        const order = mockOrderData[orderId];
        const orderStatusHTML = `
            <h3>Order Status:</h3>
            <p>Status: <strong>${order.status}</strong></p>
            <p>Location: <strong>${order.location}</strong></p>
            <p>Estimated Arrival: <strong>${order.estimatedArrival}</strong></p>
        `;
        document.getElementById('order-status').innerHTML = orderStatusHTML;
    } else {
        // Show an error message if order ID is not found
        document.getElementById('order-status').innerHTML = `
            <p class="error">Invalid Order ID. Please check and try again.</p>
        `;
    }
});

// Show and Hide Login Modal
document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
});

document.getElementById('closeLogin').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Validate login form
function validateForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (username === "" || password === "") {
        errorMessage.style.display = 'block';
        errorMessage.innerText = "Please fill in all fields.";
        return false;
    } else {
        errorMessage.style.display = 'none';
        // Perform login action (e.g., server authentication)
        console.log("Logging in with username:", username);
        return true; // Submit form if no errors
    }
}



// Handle Form Submission for Tracking
document.getElementById('track-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    
    const orderId = document.getElementById('order-id').value;  // Get order ID entered by user
    
    // Check if the order ID exists in mock data
    if (mockOrderData[orderId]) {
        // Display order status
        const order = mockOrderData[orderId];
        const orderStatusHTML = `
            <h3>Order Status:</h3>
            <p>Status: <strong>${order.status}</strong></p>
            <p>Location: <strong>${order.location}</strong></p>
            <p>Estimated Arrival: <strong>${order.estimatedArrival}</strong></p>
        `;
        document.getElementById('order-status').innerHTML = orderStatusHTML;
    } else {
        // Show an error message if order ID is not found
        document.getElementById('order-status').innerHTML = `
            <p class="error">Sorry, we couldn't find an order with that ID. Please check again.</p>
        `;
    }
});


// Show and Hide Login Modal
  document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
});

document.getElementById('closeLogin').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Show and hide login modal
document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
});

document.getElementById('closeLogin').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Validate login form
function validateForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (username === "" || password === "") {
        errorMessage.style.display = 'block';
        errorMessage.innerText = "Please fill in all fields.";
        return false;
    } else {
        errorMessage.style.display = 'none';
        // Perform login action (e.g., server authentication)
        console.log("Logging in with username:", username);
        return true; // Submit form if no errors
    }
}
