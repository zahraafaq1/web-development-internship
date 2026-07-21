document.getElementById("loginBtn").addEventListener("click",async function(){

    const email=document.getElementById("loginEmail").value;

    const password=document.getElementById("loginPassword").value;

    const response=await fetch("http://localhost:3000/login",{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify({

            email,

            password

        })

    });

    const message=await response.text();

    document.getElementById("loginMessage").textContent=message;

});