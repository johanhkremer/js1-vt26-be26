import { getCurrentWeather } from "../services/weatherService.js"
import { renderLoadState, renderError } from "./shared.js"

export const renderCurrentWeatherCard = async (lat: number, lon: number, weatherContainer: HTMLElement): Promise<void> => {
    renderLoadState(weatherContainer)

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
