import imgOne from '../img/sunny.jpg'
import imgTwo from '../img/rainy.jpg'
import imgThree from '../img/storems.jpg'
// import imgFour from '../img/winter.jpg'
import imgFive from '../img/snow.jpg'
import imgSix from '../img/cloudy.jpg'
import imgseven from '../img/haze.png'



export let allWeather = [
    {
        id: imgOne,
        //clear
        climate: [
            "Clear",
            "Clear sky",
            "Sunny",
            "Fair"
        ]
    },

    {
        id: imgSix,
        // id: imgOne,
        // clouds
        climate: [
            "Clouds",
            "Few clouds ",
            "Scattered clouds ",
            "Broken clouds ",
            "Overcast clouds "
        ]
    },

    {
        id: imgTwo,
        //rain
        climate: [
            "rain",
            "Light rain",
            "Moderate rain",
            "Heavy intensity rain",
            "Very heavy rain",
            "Extreme rain",
            "Freezing rain",
            "Light intensity shower rain",
            "Shower rain",
            "Heavy intensity shower rain",
            "Ragged shower rain"
        ]
    },

    {
        id: imgTwo,
        // drizzle
        climate: [
            "Light intensity drizzle",
            "Drizzle",
            "Heavy intensity drizzle",
            "Light intensity drizzle rain",
            "Drizzle rain",
            "Heavy intensity drizzle rain",
            "Shower rain and drizzle",
            "Heavy shower rain and drizzle",
            "Shower drizzle"
        ]
    },

    {
        id: imgThree,
        // thunderstorm
        climate: [
            "Thunderstorm with light rain",
            "Thunderstorm with rain",
            "Thunderstorm with heavy rain",
            "Light thunderstorm",
            "Thunderstorm",
            "Heavy thunderstorm",
            "Ragged thunderstorm",
            "Thunderstorm with light drizzle",
            "Thunderstorm with drizzle",
            "Thunderstorm with heavy drizzle"
        ]
    },

    {
        id: imgFive,
        // snow
        climate: [
            "Light snow",
            "Snow",
            "Heavy snow",
            "Sleet",
            "Light shower sleet",
            "Shower sleet",
            "Light rain and snow",
            "Rain and snow",
            "Light shower snow",
            "Shower snow",
            "Heavy shower snow"
        ]
    },

    {
        // fog
        id: imgseven,
        climate: [
            "atmosphere",
            "Mist",
            "Smoke",
            "Haze",
            "Sand/ dust whirls",
            "Fog",
            "Sand",
            "Dust",
            "Volcanic ash",
            "Squalls",
            "Tornado",
            "winter"
        ]
    }
]