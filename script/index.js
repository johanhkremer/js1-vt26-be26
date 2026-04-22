import { OPEN_WEATHER_API_KEY } from "./config.js"

const cityWeatherForm = document.getElementById("cityWeatherForm")
const cityWeatherInput = document.getElementById("cityWeatherInput")
const weatherCard = document.getElementById("weatherCard")

const getWeather = async (city) => {
    const [location] = await getCoordinates(city)

    if (!location) {
        throw new Error("🏙️🛑 Kunde inte hitta platsen")
    }

    const { lat, lon } = location

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`)

    if (!response.ok) {
        throw new Error("☀️🛑 Kunde inte hämta väderdata")
    }

    const data = await response.json()

    return data
}

const getCoordinates = async (city) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},SE&limit=1&appid=${OPEN_WEATHER_API_KEY}`)

    if (!response.ok) {
        throw new Error("🌏🛑 Kunde inte hämta koordinater")
    }

    const data = await response.json()

    return data
}

const renderWeatherCard = async (city) => {
    try {
        const weatherCity = await getWeather(city)
        console.log(weatherCity)

        weatherCard.innerHTML = `
    <h2>${weatherCity.name}</h2>

    <img src="https://openweathermap.org/img/wn/${weatherCity.weather[0].icon}@2x.png"
    alt="${weatherCity.weather[0].description}">
    <p>Temperatur: ${weatherCity.main.temp}°C</p>
    <p>Känns som: ${weatherCity.main.feels_like}°C</p>
    <p>Väder: ${weatherCity.weather[0].description}</p>
    <p>Luftfuktighet: ${weatherCity.main.humidity}%</p>
    <p>Vind: ${weatherCity.wind.speed} m/s</p>
    `
        weatherCard.classList.add("weatherCard")

    } catch (error) {
        console.log("Something went wrong: ", error)
        weatherCard.innerHTML = `
        <p>Någontin gick fel: ${error.message}</p>
        `
        weatherCard.classList.add("red")
    }
}

cityWeatherForm.addEventListener("submit", (event) => {
    event.preventDefault()

    weatherCard.innerHTML = ""
    weatherCard.classList.remove("red", "weatherCard")

    const city = cityWeatherInput.value.trim()

    renderWeatherCard(city)
})