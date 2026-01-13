document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("orderName").value.trim();
    const email = document.getElementById("orderEmail").value.trim();
    const phone = document.getElementById("orderPhone").value.trim();
    const address = document.getElementById("orderAddress").value.trim();
    const cupcakeSelection = document.getElementById("cupcakeSelection").value;
    const quantity = document.getElementById("orderQuantity").value;
    const instructions = document
      .getElementById("orderInstructions")
      .value.trim();

    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !cupcakeSelection ||
      quantity <= 0
    ) {
      document.getElementById("orderStatus").textContent =
        "Please fill out all required fields correctly.";
      return;
    }

    fetch("/place-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById("orderStatus").textContent =
          "Thank you, order received!";
        document.getElementById("orderForm").reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("orderStatus").textContent =
          "Thank you, order received!";
      });
  });

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      document.getElementById("contactStatus").textContent =
        "Please fill out all required fields.";
      return;
    }

    fetch("/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById("contactStatus").textContent =
          "Thank you for your message!";
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("contactStatus").textContent =
          "Thank you for your message!";
      });
  });
