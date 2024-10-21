// Show registration success
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration successful!');
});

// Show dashboard after login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('auth').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
});

// Logout functionality
document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('auth').classList.remove('hidden');
    document.getElementById('dashboard').classList.add('hidden');
});

// Search functionality
document.getElementById('search-btn').addEventListener('click', function() {
    const location = document.getElementById('search-location').value.toLowerCase();
    const houses = document.querySelectorAll('.house');
    let found = false;

    houses.forEach(house => {
        if (house.dataset.location.toLowerCase() === location) {
            house.classList.remove('hidden');
            found = true;
        } else {
            house.classList.add('hidden');
        }
    });

    if (found) {
        document.querySelector('.results').classList.remove('hidden');
    } else {
        alert('No houses found for this location.');
    }
});

// Booking functionality
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('dashboard').classList.add('hidden');
        document.getElementById('payment').classList.remove('hidden');
    });
});

// Payment form submission
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment successful! You have successfully booked the house.');
    document.getElementById('payment').classList.add('hidden');
    document.getElementById('auth').classList.remove('hidden'); // Redirect to auth
});

// Sell a house functionality
document.getElementById('sell-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const owner = document.getElementById('sell-owner').value;
    const price = document.getElementById('sell-price').value;
    const location = document.getElementById('sell-location').value;
    const type = document.getElementById('sell-type').value;

    // Create a new house element
    const newHouse = document.createElement('div');
    newHouse.className = 'house';
    newHouse.dataset.location = location; // Set the location for search functionality
    newHouse.innerHTML = `
        <p>Location: ${location}</p>
        <p>Owner: ${owner}</p>
        <p>Price: $${price}</p>
        <p>Type: ${type} BHK</p>
        <button class="book-btn">Book Now</button>
    `;

    // Append new house to results
    document.querySelector('.results').appendChild(newHouse);

    // Clear the form
    document.getElementById('sell-form').reset();
    alert('House listed successfully!');
});
