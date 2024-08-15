const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

// Handle POST request to /place-order
app.post('/place-order', (req, res) => {
    const { name, email, cupcake } = req.body;

    // Here you would normally save the order to a database
    console.log(`Order received: ${name}, ${email}, ${cupcake}`);

    // Send a response back to the client
    res.json({ message: `Thank you, ${name}! Your ${cupcake} order has been placed.` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
