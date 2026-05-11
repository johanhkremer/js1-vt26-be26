import { getCoordinates } from "./services/weatherService.js"
import { renderCurrentDetailedWeatherCard, renderForecastCards } from "./ui/renderDetailPage.js"
import { renderError } from "./ui/shared.js"

const weatherDetailedContainer = document.querySelector<HTMLElement>("#weatherDetailedContainer")
const forecastContainer = document.querySelector<HTMLElement>("#forecastContainer")

if (!weatherDetailedContainer || !forecastContainer) {
    throw new Error("Detaljsidan saknar ett HTML-element som TypeScript-koden behöver.")
}

const loadDetailedPage = async (city: string | null): Promise<void> => {
    try {
        if (!city) {
            throw new Error("Ingen stad skickades till detaljsidan")
        }

        const [location] = await getCoordinates(city)

        if (!location) {
            throw new Error("Kunde inte hämta detaljdata om staden")
        }

        const { lat, lon } = location

        renderCurrentDetailedWeatherCard(lat, lon, weatherDetailedContainer)
        renderForecastCards(lat, lon, forecastContainer)

    } catch (error) {
        renderError(error, weatherDetailedContainer)
    }
}

const params = new URLSearchParams(window.location.search)

const city = params.get("code")

loadDetailedPage(city)
