// ======================================
// FUNCTIONS
// ======================================

function greet(name){

    return "Hello, " + name + "!";

}

console.log(greet("Zahra"));

console.log(greet("Ali"));


// ======================================
// CONDITIONALS
// ======================================

let age = 21;

if(age >= 18){

    console.log("You are an adult.");

}

else{

    console.log("You are a minor.");

}


// ======================================
// DOM
// ======================================

const heading = document.getElementById("greeting");

console.log("Original Heading:");

console.log(heading.textContent);

// Change heading automatically

heading.textContent = "Welcome to JavaScript!";


// ======================================
// BUTTON EVENT
// ======================================

const button = document.getElementById("myBtn");

button.addEventListener("click", function(){

    heading.textContent = "Button Clicked!";

    document.getElementById("message").textContent =
    "You successfully changed the webpage using JavaScript.";

    console.log("Button was clicked.");

});