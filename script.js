document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
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

    fetch('/place-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => {
        // 
        document.getElementById('orderStatus').innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('orderStatus').innerText = 'Something went wrong. Please try again.';
    });
});
