import { getCurrentWeather, getForecast } from "../services/weatherService.js"

const weatherContainer = document.getElementById("weatherContainer")
const forecastContainer = document.getElementById("forecastContainer")

const renderLoadstate = (container) => {
    container.innerHTML = "<p class='blue'>Din data laddas</p>"
}

export const renderError = (error, container) => {
    console.log("Something went wrong: ", error)
    container.innerHTML = `
        <p>Någontin gick fel: ${error.message}</p>
        `
    container.classList.add("red")
}

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

//DetailedCard

export const renderForcastCards = async (lat, lon) => {
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