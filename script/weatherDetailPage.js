import { getCoordinates } from "./services/weatherService.js"
import { renderCurrentDetailedWeatherCard, renderForcastCards } from "./ui/renderDetailPage.js"
import { renderError } from "./ui/shared.js"

const weatherDetailedContainer = document.getElementById("weatherDetailedContainer")
const forecastContainer = document.getElementById("forecastContainer")

const loadDetailedPage = async (city) => {
    try {
        const [location] = await getCoordinates(city)

        if (!location) {
            throw new Error("Kunde inte hämta detaljdata om staden")
        }

        const { lat, lon } = location

        renderCurrentDetailedWeatherCard(lat, lon)
        renderForcastCards(lat, lon)

    } catch (error) {
        renderError(error, weatherDetailedContainer)
    }
}

const params = new URLSearchParams(window.location.search)

const city = params.get("code")

loadDetailedPage(city)