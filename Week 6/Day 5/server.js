const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("./User");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));

// ===========================
// MongoDB Connection
// Replace this with YOUR connection string
// ===========================

const dbURI = "mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/internshipDB?retryWrites=true&w=majority";

mongoose.connect(dbURI)
.then(() => {
    console.log("✅ Connected to MongoDB!");
})
.catch((err) => {
    console.log("❌ Database Connection Error:");
    console.log(err);
});

// ===========================
// Home Route
// ===========================

app.get("/", (req, res) => {
    res.send("Welcome to my Authentication System!");
});

// ===========================
// Register Route
// ===========================

app.post("/register", async (req, res) => {

    try {

        const { username, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.send("Email already registered!");
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({

            username,
            email,
            password: hashedPassword

        });

        await newUser.save();

        res.send("User Registered Successfully!");

    }

    catch (err) {

        console.log(err);

        res.status(500).send("Registration Failed!");

    }

});

// ===========================
// Login Route
// ===========================

app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.send("User not found!");

        }

        const match = await bcrypt.compare(password, user.password);

        if (match) {

            res.send("Login Successful!");

        }

        else {

            res.send("Incorrect Password!");

        }

    }

    catch (err) {

        console.log(err);

        res.status(500).send("Login Failed!");

    }

});

// ===========================
// Start Server
// ===========================

app.listen(PORT, () => {

    console.log(`🚀 Server running at http://localhost:${PORT}`);

});