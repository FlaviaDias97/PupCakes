// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Define the port, using either an environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Middleware for parsing application/json (to handle JSON body data)
app.use(bodyParser.json());

// Middleware for serving static files (HTML, CSS, JS, etc.) from the "public" directory
app.use(express.static('public'));

// Endpoint for handling order form submissions
app.post('/place-order', (req, res) => {
    const orderDetails = req.body;
    console.log("Order received: ", orderDetails);

    // Here you can add logic to save the order to a database if needed

    // Simulate a successful order response
    res.status(200).json({ message: 'Order received! Thank you!' });
});

// Endpoint for handling contact form submissions
app.post('/send-message', (req, res) => {
    const contactDetails = req.body;
    console.log("Message received: ", contactDetails);

    // Here you can add logic to save the contact message to a database or send an email

    // Simulate a successful contact form response
    res.status(200).json({ message: 'Contact message received! Thank you!' });
});

// Start the server, listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

