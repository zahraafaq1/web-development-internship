const apiKey = "186cfcf092eeee8282263722f38f8960";

const cityInput = document.getElementById("cityInput");

const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temperature");

const condition = document.getElementById("condition");

const humidity = document.getElementById("humidity");

const wind = document.getElementById("wind");

async function getWeather(city){

    const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        if(data.cod != 200){

            alert(data.message);

            return;

        }

        cityName.textContent =
        "📍 " + data.name;

        temperature.textContent =
        "🌡 Temperature : " +
        data.main.temp + " °C";

        condition.textContent =
        "☁ Condition : " +
        data.weather[0].description;

        humidity.textContent =
        "💧 Humidity : " +
        data.main.humidity + "%";

        wind.textContent =
        "🌬 Wind : " +
        data.wind.speed + " m/s";

    }

    catch(error){

        console.log(error);

        alert("Something went wrong.");

    }

}

searchBtn.addEventListener("click", function(){

    const city = cityInput.value.trim();

    if(city===""){

        alert("Please enter a city.");

        return;

    }

    getWeather(city);

});