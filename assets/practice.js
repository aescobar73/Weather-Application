function getWeather() {
    searchBox.value

    let getCity = "http://api.openweathermap.org/geo/1.0/direct?q=" + searchBox.value + "&appid=7e461f5d070af7de1c2d5bd578274de9"

    fetch(getCity)
    .then(function(response) {
        return response.json()
    })
    .then(function (data) {
        var longitude = data[0].lon;
        var latitude = data[0].lat;
        console.log(longitude)
        console.log(latitude)

        // newCity(longitude, latitude)

    })
}

let newCity = (longitude, latitude) => {
    var currentWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`

    fetch(currentWeather)
    .then(function(response) {
        return response.json()
    })
    .then(function (data) {
        var tempatureData = data.main.temp
        var windData = data.wind.speed
        var humidityData = data.main.humidity

        var tempInfo = document.querySelector('#temp')
        var windInfo = document.querySelector('#wind')
        var humidityInfo = document.querySelector('#humidity')

        tempInfo.innerHTML = tempatureData
        windInfo.innerHTML = windData
        humidityInfo.innerHTML = humidityData

    })
}

getWeather()

searchButton.addEventListener('click', getWeather)