import { getCurrentWeather, getForecast } from "../services/weatherService.js"
import { renderLoadstate, renderError } from "./shared.js"

const forecastContainer = document.getElementById("forecastContainer")
const weatherDetailedContainer = document.getElementById("weatherDetailedContainer")

export const renderCurrentDetailedWeatherCard = async (lat, lon) => {
    renderLoadstate(weatherDetailedContainer)

    try {
        const weatherCity = getCurrentWeather(lat, lon)

        weatherDetailedContainer.innerHTML = `
            <article class="weatherCard">
                <h2>${weatherCity.name}</h2>
                <img src="https://openweathermap.org/img/wn/${weatherCity.weather[0].icon}@2x.png"
                alt="${weatherCity.weather[0].description}">
                <p>Temperatur: ${Math.round(weatherCity.main.temp)}°C</p>
                <p>Väder: ${weatherCity.weather[0].description}</p>
            </article>
    `

    } catch (error) {
        renderError(error, weatherDetailedContainer)
    }
}

export const renderForcastCards = async (lat, lon) => {
    renderLoadstate(forecastContainer)

    try {
        const forecastData = getForecast(lat, lon)

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
