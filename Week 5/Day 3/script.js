const apiKey = "186cfcf092eeee8282263722f38f8960";

async function getWeather(city){

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        if(data.cod != 200){

            alert("City not found or API key is not active.");

            return;

        }

        document.getElementById("city").textContent =
        "City: " + data.name;

        document.getElementById("temperature").textContent =
        "Temperature: " + data.main.temp + " °C";

        document.getElementById("condition").textContent =
        "Condition: " + data.weather[0].description;

        document.getElementById("humidity").textContent =
        "Humidity: " + data.main.humidity + "%";

    }

    catch(error){

        console.log(error);

    }

}

document.getElementById("searchBtn")
.addEventListener("click", function(){

    const city =
    document.getElementById("cityInput").value;

    if(city===""){

        alert("Please enter a city.");

        return;

    }

    getWeather(city);

});