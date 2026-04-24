import { OPEN_WEATHER_API_KEY } from "./config.js"

const cityWeatherForm = document.getElementById("cityWeatherForm")
const cityWeatherInput = document.getElementById("cityWeatherInput")
const weatherContainer = document.getElementById("weatherContainer")
const forecastContainer = document.getElementById("forecastContainer")

const getCurrentWeather = async (city) => {
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

const getForecast = async (city) => {
    const [location] = await getCoordinates(city)

    const { lat, lon } = location

    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`)

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

const renderCurrentWeatherCard = async (city) => {
    try {
        const weatherCity = await getCurrentWeather(city)

        weatherContainer.innerHTML = `
            <div class="weatherCard">
                <h2>${weatherCity.name}</h2>

                <img src="https://openweathermap.org/img/wn/${weatherCity.weather[0].icon}@2x.png"
                alt="${weatherCity.weather[0].description}">
                <p>Temperatur: ${weatherCity.main.temp}°C</p>
                <p>Känns som: ${weatherCity.main.feels_like}°C</p>
                <p>Väder: ${weatherCity.weather[0].description}</p>
                <p>Luftfuktighet: ${weatherCity.main.humidity}%</p>
                <p>Vind: ${weatherCity.wind.speed} m/s</p>
            </div>
    `
    } catch (error) {
        console.log("Something went wrong: ", error)
        weatherContainer.innerHTML = `
        <p>Någontin gick fel: ${error.message}</p>
        `
        weatherContainer.classList.add("red")
    }
}

const renderForcastCards = async (city) => {
    try {
        const forecastData = await getForecast(city)

        const dailyForecasts = forecastData.list.filter((forecast) => {
            return forecast.dt_txt.includes("12:00:00")
        })

        const forecastCards = dailyForecasts.map((forecastCard) => {
            const date = forecastCard.dt_txt.split(" ")[0]

            return `
                <article class="forecastCard">
                    <h3>${date}</h3>
                    <img
                        src="https://openweathermap.org/img/wn/${forecastCard.weather[0].icon}@2x.png"
                        alt="${forecastCard.weather[0].description}"
                    >
                    <p>Temperatur: ${Math.round(forecastCard.main.temp)}°C</p>
                    <p>Väder: ${forecastCard.weather[0].description}</p>
                </article>
            `
        }).join("")

        forecastContainer.innerHTML = forecastCards

    } catch (error) {
        console.log("Something went wrong: ", error)
        forecastContainer.innerHTML = `
        <p>Någontin gick fel: ${error.message}</p>
        `
        forecastContainer.classList.add("red")
    }
}

const renderApp = (city) => {
    //Coordinates

    renderCurrentWeatherCard(city)
    renderForcastCards(city)
}

cityWeatherForm.addEventListener("submit", (event) => {
    event.preventDefault()

    weatherContainer.innerHTML = ""
    weatherContainer.classList.remove("red", "weatherCard")

    const city = cityWeatherInput.value.trim()

    renderApp(city)
})