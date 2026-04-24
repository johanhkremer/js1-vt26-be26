import { OPEN_WEATHER_API_KEY } from "./config.js"

const cityWeatherForm = document.getElementById("cityWeatherForm")
const cityWeatherInput = document.getElementById("cityWeatherInput")
const weatherContainer = document.getElementById("weatherContainer")
const forecastContainer = document.getElementById("forecastContainer")

const getCurrentWeather = async (lat, lon) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`)

    if (!response.ok) {
        throw new Error("☀️🛑 Kunde inte hämta aktuell väderdata")
    }

    const data = await response.json()

    return data
}

const getForecast = async (lat, lon) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`)

    if (!response.ok) {
        throw new Error("☀️🛑 Kunde inte hämta väderprognos")
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

const renderCurrentWeatherCard = async (lat, lon) => {
    renderLoadstate(weatherContainer)

    try {
        const weatherCity = await getCurrentWeather(lat, lon)

        weatherContainer.innerHTML = `
            <article class="weatherCard">
                <h2>${weatherCity.name}</h2>

                <img src="https://openweathermap.org/img/wn/${weatherCity.weather[0].icon}@2x.png"
                alt="${weatherCity.weather[0].description}">
                <p>Temperatur: ${Math.round(weatherCity.main.temp)}°C</p>
                <p>Känns som: ${Math.round(weatherCity.main.feels_like)}°C</p>
                <p>Väder: ${weatherCity.weather[0].description}</p>
                <p>Luftfuktighet: ${weatherCity.main.humidity}%</p>
                <p>Vind: ${weatherCity.wind.speed} m/s</p>
            </article>
    `
    } catch (error) {
        renderError(error, weatherContainer)
    }
}

const renderForcastCards = async (lat, lon) => {
    renderLoadstate(forecastContainer)

    try {
        const forecastData = await getForecast(lat, lon)

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
        renderError(error, forecastContainer)
    }
}

const renderLoadstate = (container) => {
    container.innerHTML = "<p class='blue'>Din data laddas</p>"
}

const renderError = (error, container) => {
    console.log("Something went wrong: ", error)
    container.innerHTML = `
        <p>Någontin gick fel: ${error.message}</p>
        `
    container.classList.add("red")
}

const renderApp = async (city) => {
    try {
        const [location] = await getCoordinates(city)

        if (!location) {
            throw new Error("🏙️🛑 Kunde inte hitta platsen")
        }

        const { lat, lon } = location

        renderCurrentWeatherCard(lat, lon)
        renderForcastCards(lat, lon)

    } catch (error) {
        renderError(error, forecastContainer)
    }
}

cityWeatherForm.addEventListener("submit", (event) => {
    event.preventDefault()

    weatherContainer.innerHTML = ""
    weatherContainer.classList.remove("red", "weatherCard")
    forecastContainer.innerHTML = ""
    forecastContainer.classList.remove("red")

    const city = cityWeatherInput.value.trim()

    renderApp(city)
})