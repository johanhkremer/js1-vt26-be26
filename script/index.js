import { getCoordinates } from "./services/weatherService.js"
import { renderError } from "./ui/shared.js"
import { renderCurrentWeatherCard } from "./ui/renderHomePage.js"

const cityWeatherForm = document.getElementById("cityWeatherForm")
const cityWeatherInput = document.getElementById("cityWeatherInput")
const weatherContainer = document.getElementById("weatherContainer")

const loadHomePage = async (city) => {
    try {
        const [location] = getCoordinates(city)

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

    loadHomePage(city)
})
