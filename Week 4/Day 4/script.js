// =======================================
// ARRAY PRACTICE
// =======================================

let tasks = ["Learn HTML", "Learn CSS"];

tasks.push("Learn JavaScript");

console.log(tasks);

tasks.splice(0,1);

console.log(tasks);

tasks.forEach(function(task){

    console.log(task);

});

// =======================================
// TO-DO LIST
// =======================================

const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function(){

    if(taskInput.value===""){

        alert("Please enter a task.");

        return;

    }

    const li = document.createElement("li");

    li.textContent = taskInput.value;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function(){

        li.remove();

    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value="";

});