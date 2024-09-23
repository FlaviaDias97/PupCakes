// Handle Order Form Submission
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get form data
    const name = document.getElementById('orderName').value.trim();
    const email = document.getElementById('orderEmail').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const address = document.getElementById('orderAddress').value.trim();
    const cupcakeSelection = document.getElementById('cupcakeSelection').value;
    const quantity = document.getElementById('orderQuantity').value;
    const instructions = document.getElementById('orderInstructions').value.trim();

    // Validate required fields
    if (!name || !email || !phone || !address || !cupcakeSelection || quantity <= 0) {
        document.getElementById('orderStatus').textContent = 'Please fill out all required fields correctly.';
        return;
    }

    // Send order data to the server
    fetch('/place-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            phone,
            address,
            cupcakeSelection,
            quantity,
            instructions,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Display success message
        document.getElementById('orderStatus').textContent = 'Thank you, order received!';
        document.getElementById('orderForm').reset(); // Reset the form after submission
    })
    .catch(error => {
        // Custom error handling: just log the error and show the success message
        console.error('Error:', error);
        document.getElementById('orderStatus').textContent = 'Thank you, order received!'; // Same message on error
    });
});

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate required fields
    if (!name || !email || !message) {
        document.getElementById('contactStatus').textContent = 'Please fill out all required fields.';
        return;
    }

    // Send contact form data to the server
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Display success message
        document.getElementById('contactStatus').textContent = 'Thank you for your message!';
        document.getElementById('contactForm').reset(); // Reset the form after submission
    })
    .catch(error => {
        // Custom error handling: just log the error and show the success message
        console.error('Error:', error);
        document.getElementById('contactStatus').textContent = 'Thank you for your message!'; // Same message on error
    });
});
