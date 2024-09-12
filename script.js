document.addEventListener('DOMContentLoaded', function () {

    console.log("DOM fully loaded and parsed");

    const orderForm = document.getElementById('orderForm');
    if (!orderForm) {
        console.error("Order form not found!");
        return;
    }

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        console.log("Form submission triggered");

        const name = document.getElementById('orderName').value;
        const email = document.getElementById('orderEmail').value;
        const phone = document.getElementById('orderPhone').value;
        const address = document.getElementById('orderAddress').value;
        const cupcakeSelection = document.getElementById('cupcakeSelection').value;
        const quantity = document.getElementById('orderQuantity').value;
        const instructions = document.getElementById('orderInstructions').value;

        const orderData = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            cupcakeSelection: cupcakeSelection,
            quantity: quantity,
            instructions: instructions
        };

        console.log("Order Data: ", orderData);

        setTimeout(() => {
            document.getElementById('orderStatus').innerText = 'Order received! Thank you!';
            console.log("Order received!");
        }, 500); 
    });
});

// contact form section 

document.addEventListener('DOMContentLoaded', function () {
    // Contact Form Event Listener
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.error("Contact form not found!");
        return;
    }

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get values from input fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create an object for the contact data
        const contactData = {
            name: name,
            email: email,
            message: message
        };

        console.log("Contact Data: ", contactData);

        // Simulate server response and show the thank-you message
        setTimeout(() => {
            // Display success message below the form
            document.getElementById('contactStatus').innerText = 'Contact message received!';
            console.log("Contact message received!");
        }, 500); // Simulate a response after 0.5 seconds
    });
});
