document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const orderData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        cupcakeSelection: document.getElementById('cupcakeSelection').value,
        quantity: document.getElementById('quantity').value,
        instructions: document.getElementById('instructions').value
    };

    fetch('/place-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('orderStatus').innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('orderStatus').innerText = 'Something went wrong. Please try again.';
    });
});

