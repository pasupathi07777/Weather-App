import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { allWeather } from './allWeather.js'
import { months } from './month.js'
import { loder } from './looder.js'



let data = createContext()

const Context = ({ children }) => {


    let [placeName, setplaceName] = useState("")
    let [userInput, setuserInput] = useState("")
    let [wetImg, setwetImg] = useState("")
    let [Display, setDisplay] = useState("")
    let [weather, setweather] = useState("")
    let [temperature, settemperature] = useState("")
    let [description, setdescription] = useState("")
    let [day, setday] = useState("")
    let [loading, setloading] = useState(false)
    let [errors, seterrors] = useState("")
    let ctime = new Date()
    ctime=`${months[ctime.getMonth()]} ${ctime.getDate()}th /${ctime.getFullYear()},${ctime.getHours()}:${ctime.getMinutes()}:${ctime.getSeconds()}`


    let datails = {

        Title: "Weather App",
        subTitle: "I can give you a Weather report about your city!",
        btn: "Get Weather",
        infoOne: "Weather",
        infoTwo: "Temperature",
        infoThree: "Description"
    }



    let handleCallApi = async () => {
        if (userInput === "") return
        setplaceName("")
        setday("")
        setwetImg("")
        settemperature("")
        setweather("")
        setdescription("")
        setloading(true)
        seterrors("")
        const nameCurrent = userInput



        try {
            let datas = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=0e6f7ca8a03e83b279d7776e0f0ee214`)
            console.log(datas)
            setDisplay(datas)
            setplaceName(nameCurrent)
            setuserInput("")
            setday(ctime)



        } catch (e) {

            if (e !== "") {
                console.log("errors")
                seterrors("Not Found")
                setloading(false)
            }

        }




    }
    useEffect(() => {
        console.log(Display.data

        )
        if (Display !== "") {
            setloading(false)
            let weatherCondition = Display.data.weather[0].main;
            console.log(weatherCondition)


            console.log(weatherCondition)
            let found = allWeather.find(e => {
                if (e.climate && Array.isArray(e.climate)) {
                    let lowercaseClimate = e.climate.map(condition => condition.toLowerCase());
                    return lowercaseClimate.includes(weatherCondition.toLowerCase());
                }
                return false;
            });

            let founder = found ? found : null;
            setwetImg(founder)
            console.log(founder)

            setweather(Display.data.weather[0].main)
            settemperature(`${Math.floor(Display.data.main.temp - 273.15)}°C`)
            setdescription(`Wind speed ${Math.floor(Display.data.wind.speed * 3.6)} km/h`)
            

         

        }
    }, [Display])





    return (
        <data.Provider value={{
            handleCallApi, datails, userInput, setuserInput, temperature, weather, description, placeName, wetImg, day, loading, errors, loder

        }}>
            {children}

        </data.Provider>
    )
}


export default Context
export { data }