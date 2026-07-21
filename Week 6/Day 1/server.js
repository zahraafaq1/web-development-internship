const express = require("express");

const app = express();

const PORT = 3000;

// Home Page
app.get("/", (req, res) => {

    res.send("Hello from my backend server!");

});

// About Page
app.get("/about", (req, res) => {

    res.send("Welcome to the About Page!");

});

// Contact Page
app.get("/contact", (req, res) => {

    res.send("Contact us at example@email.com");

});

// Start Server
app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});