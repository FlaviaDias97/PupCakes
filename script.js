document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Gather form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const cupcake = document.getElementById('cupcake').value;

  // Create an object to send to the server
  const orderData = {
      name: name,
      email: email,
      cupcake: cupcake
  };

  // Send data to server using Fetch API
  fetch('/place-order', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
  })
  .then(response => response.json())
  .then(data => {
      // Update the order status
      document.getElementById('orderStatus').innerText = data.message;
  })
  .catch(error => {
      console.error('Error:', error);
      document.getElementById('orderStatus').innerText = 'Something went wrong. Please try again.';
  });
});

