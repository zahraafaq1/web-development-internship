// Get HTML Elements

const num1 = document.getElementById("num1");

const num2 = document.getElementById("num2");

const result = document.getElementById("result");


// Addition

document.getElementById("addBtn").addEventListener("click", function(){

    result.textContent = Number(num1.value) + Number(num2.value);

});


// Subtraction

document.getElementById("subBtn").addEventListener("click", function(){

    result.textContent = Number(num1.value) - Number(num2.value);

});


// Multiplication

document.getElementById("mulBtn").addEventListener("click", function(){

    result.textContent = Number(num1.value) * Number(num2.value);

});


// Division

document.getElementById("divBtn").addEventListener("click", function(){

    if(Number(num2.value)===0){

        result.textContent = "Cannot divide by zero";

    }

    else{

        result.textContent = Number(num1.value) / Number(num2.value);

    }

});