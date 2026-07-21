document.getElementById("registerBtn").addEventListener("click", async function(){

    const username = document.getElementById("regUsername").value;

    const email = document.getElementById("regEmail").value;

    const password = document.getElementById("regPassword").value;

    const response = await fetch("http://localhost:3000/register",{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify({

            username,

            email,

            password

        })

    });

    const message = await response.text();

    document.getElementById("regMessage").textContent = message;

});