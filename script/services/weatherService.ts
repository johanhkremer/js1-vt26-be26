import { OPEN_WEATHER_API_KEY } from "../config.js"
import type { Coordinates, ForecastData, WeatherData } from "../types.js"

const BASE_URL = "https://api.openweathermap.org/"

export const getCurrentWeather = async (lat: number, lon: number): Promise<WeatherData> => {
    const response = await fetch(`${BASE_URL}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`)

    if (!response.ok) {
        throw new Error("☀️🛑 Kunde inte hämta aktuell väderdata")
    }

    const data: WeatherData = await response.json()

    return data
}

export const getForecast = async (lat: number, lon: number): Promise<ForecastData> => {
    const response = await fetch(`${BASE_URL}data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`)

    if (!response.ok) {
        throw new Error("☀️🛑 Kunde inte hämta väderprognos")
    }

    const data: ForecastData = await response.json()

    return data
}

export const getCoordinates = async (city: string): Promise<Coordinates[]> => {
    const encodedCity = encodeURIComponent(city)
    const response = await fetch(`${BASE_URL}geo/1.0/direct?q=${encodedCity},SE&limit=1&appid=${OPEN_WEATHER_API_KEY}`)

    if (!response.ok) {
        throw new Error("🌏🛑 Kunde inte hämta koordinater")
    }

    const data: Coordinates[] = await response.json()

    return data
}
