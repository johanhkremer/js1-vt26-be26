//Variabler men enkla datatyper
const city: string = "Stockholm"
const region = "Skåne"
const temperature: number = 123
const isRaining: boolean = false

//Arrayer
const cities: string[] = ["Stockholm", "Malmö", "Göteborg"]
const temperatures: number[] = [12, 22, 9]

cities.push("Uppsala")

//Objects
const currentWeather: {
    city: string
    temperature: number
    isRaining: boolean
} = {
    city: "Malmö",
    temperature: 14,
    isRaining: false
}

console.log(currentWeather.city)


//Object types
type Coordinates = {
    lat: number
    lon: number
}

const stockholmCoordinates: Coordinates = {
    lat: 59.3293,
    lon: 18.0686,
}

//Object Interface
interface WeatherReport {
    city: string
    temperature: number
    isRaining: boolean
}

const cityWeather: WeatherReport = {
    city: "Stockholm",
    temperature: 23,
    isRaining: false
}

console.log(cityWeather.city)

//Functions
const logCity = (city: string, temperature: number) => {
    console.log(`This is the city: ${city} temperature: ${temperature}`)
}

logCity("Stockholm", 11)

const weatherCityReport = (weatherReport: WeatherReport): string => {
    return `Stad: ${weatherReport.city} temperatur: ${weatherReport.temperature}`
}

console.log(weatherCityReport(cityWeather))

//Optinal types

type UserType = {
    name: string
    email?: string
}

const userWithEmail: UserType = {
    name: "Erik",
    email: "test@test.com"
}

const userWithoutEmail: UserType = {
    name: "Lisa"
}

// Union types & NULL

type LoadState = "idle" | "loading" | "Success" | "Error"

let load: LoadState = "idle"

load = "loading"

load = "Success"

let User: string | null = null

if (!User) {
    console.log("No user logged in")
} else {
    console.log("Welcome user!")
}