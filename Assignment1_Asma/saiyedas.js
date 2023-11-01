function saveData() {
    const firstname = document.querySelector('#firstname').value;
    const lastname = document.querySelector('#lastname').value;
    const email = document.querySelector('#email').value;
    const selectedMovie = document.querySelector('#movies').value;

    // Getting selected gender
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    let gender = null;
    genderRadios.forEach(radio => {
        if (radio.checked) {
            gender = radio.value;
        }
    });

    const age = document.querySelector('#age').value;
    const quantity = document.querySelector('#quantityofitems').value;

    // Getting selected location
    const locationRadios = document.querySelectorAll('input[name="location"]');
    let location = null;
    locationRadios.forEach(radio => {
        if (radio.checked) {
            location = radio.value;
        }
    });

    const timeshows = document.querySelector('#timeshows').value;

    let orderData = {
        firstname,
        lastname,
        email,
        selectedMovie,
        gender,
        age,
        quantity,
        location,
        timeshows
    };
    
    console.log(orderData);
    localStorage.setItem('data', JSON.stringify(orderData));
}

function gotoNext() {
    saveData();
    window.location.href = 'second.html';
}
function onMovieChange() {
    let selectedMovie = document.getElementById('movies').value;
    let poster = document.getElementById('moviePoster');
    if (selectedMovie === "Avatar") {
        poster.src = "path/to/avatar/poster.jpg";
        poster.style.display = "block";
    } 
    // Add more conditions for other movies
}
function calculateTotalPrice() {
    let quantity = document.getElementById('quantityofitems').value;
    let price = 30;  // as mentioned in your document
    let total = quantity * price;
    document.getElementById('totalPrice').innerText = "Total Price: $" + total;
}
