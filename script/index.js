import { getCoordinates } from "./services/weatherService.js"
import { renderError } from "./ui/render.js"
import { renderCurrentWeatherCard } from "./ui/render.js"

const cityWeatherForm = document.getElementById("cityWeatherForm")
const cityWeatherInput = document.getElementById("cityWeatherInput")
const weatherContainer = document.getElementById("weatherContainer")

const renderApp = async (city) => {
    try {
        const [location] = await getCoordinates(city)

        if (!location) {
            throw new Error("🏙️🛑 Kunde inte hitta platsen")
        }

        const { lat, lon } = location

        renderCurrentWeatherCard(lat, lon)

    } catch (error) {
        renderError(error, forecastContainer)
    }
}

cityWeatherForm.addEventListener("submit", (event) => {
    event.preventDefault()

    weatherContainer.innerHTML = ""
    weatherContainer.classList.remove("red", "weatherCard")

    const city = cityWeatherInput.value.trim()

    renderApp(city)
})