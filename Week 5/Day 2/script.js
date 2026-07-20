// ==========================================
// Fetch API Example
// ==========================================

async function getUser(){

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();

    console.log(data);

    console.log(data.name);

    console.log(data.email);

    console.log(data.address.city);

    document.getElementById("name").textContent =
    "Name: " + data.name;

    document.getElementById("email").textContent =
    "Email: " + data.email;

    document.getElementById("city").textContent =
    "City: " + data.address.city;

}

// Button Click

document.getElementById("loadBtn")
.addEventListener("click", getUser);