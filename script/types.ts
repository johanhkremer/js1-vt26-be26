export type Coordinates = {
    name: string
    lat: number
    lon: number
}

export type WeatherDescription = {
    description: string
    icon: string
}

export type WeatherData = {
    name: string
    weather: WeatherDescription[]
    main: {
        temp: number
    }
}

export type ForecastItem = {
    dt_txt: string
    weather: WeatherDescription[]
    main: {
        temp: number
    }
}

export type ForecastData = {
    list: ForecastItem[]
}
