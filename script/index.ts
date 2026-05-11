import { getCoordinates } from "./services/weatherService.js"
import { renderError } from "./ui/shared.js"
import { renderCurrentWeatherCard } from "./ui/renderHomePage.js"

const cityWeatherForm = document.querySelector<HTMLFormElement>("#cityWeatherForm")
const cityWeatherInput = document.querySelector<HTMLInputElement>("#cityWeatherInput")
const weatherContainer = document.querySelector<HTMLElement>("#weatherContainer")

if (!cityWeatherForm || !cityWeatherInput || !weatherContainer) {
    throw new Error("Startsidan saknar ett HTML-element som TypeScript-koden behöver.")
}

const loadHomePage = async (city: string): Promise<void> => {
    try {
        if (!city) {
            throw new Error("Skriv in en stad först")
        }

        const [location] = await getCoordinates(city)

        if (!location) {
            throw new Error("🏙️🛑 Kunde inte hitta platsen")
        }

        const { lat, lon } = location

        renderCurrentWeatherCard(lat, lon, weatherContainer)

    } catch (error) {
        renderError(error, weatherContainer)
    }
}

cityWeatherForm.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault()

    weatherContainer.innerHTML = ""
    weatherContainer.classList.remove("red", "weatherCard")

    const city = cityWeatherInput.value.trim()

    loadHomePage(city)
})
