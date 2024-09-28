const express = require('express');
const bodyParser = require('body-parser');


const app = express();


const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use(express.static('public'));


app.post('/place-order', (req, res) => {
    const orderDetails = req.body;
    console.log("Order received: ", orderDetails);

    
    res.status(200).json({ message: 'Order received! Thank you!' });
});

app.post('/send-message', (req, res) => {
    const contactDetails = req.body;
    console.log("Message received: ", contactDetails);
    res.status(200).json({ message: 'Contact message received! Thank you!' });
});




