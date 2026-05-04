import { getCurrentWeather } from "../services/weatherService.js"
import { renderLoadstate, renderError } from "./shared.js"

const weatherContainer = document.getElementById("weatherContainer")

export const renderCurrentWeatherCard = async (lat, lon) => {
    renderLoadstate(weatherContainer)

    try {
        const weatherCity = await getCurrentWeather(lat, lon)

        weatherContainer.innerHTML = `
        <a href="weatherDetailPage.html?code=${weatherCity.name}">
            <article class="weatherCard">
                <h2>${weatherCity.name}</h2>
                <img src="https://openweathermap.org/img/wn/${weatherCity.weather[0].icon}@2x.png"
                alt="${weatherCity.weather[0].description}">
                <p>Temperatur: ${Math.round(weatherCity.main.temp)}°C</p>
                <p>Väder: ${weatherCity.weather[0].description}</p>
            </article>
        </a>
    `
    } catch (error) {
        renderError(error, weatherContainer)
    }
}