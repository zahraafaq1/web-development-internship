const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("./User");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const dbURI =
"mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/internshipDB?retryWrites=true&w=majority";

mongoose.connect(dbURI)

.then(()=>{

    console.log("✅ MongoDB Connected");

})

.catch((err)=>{

    console.log(err);

});

app.post("/register", async(req,res)=>{

    try{

        const { username,email,password } = req.body;

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({

            username,

            email,

            password: hashedPassword

        });

        await newUser.save();

        res.send("✅ User Registered Successfully!");

    }

    catch(err){

        console.log(err);

        res.status(500).send("Registration Failed");

    }

});

app.get("/",(req,res)=>{

    res.send("Registration Server Running");

});

app.listen(PORT,()=>{

    console.log(`Server running at http://localhost:${PORT}`);

});