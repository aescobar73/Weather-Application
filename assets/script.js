var apiKey = '7e461f5d070af7de1c2d5bd578274de9'
// var searchBox = document.querySelector('#info').value
var searchButton = document.querySelector('#choose')
var tempInfo = document.querySelector('#temp')
var windInfo = document.querySelector('#wind')
var humidityInfo = document.querySelector('#humidity')


searchButton.addEventListener('click', function(){
    searchVal = document.querySelector("#info").value;
    requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchVal}&appid=7e461f5d070af7de1c2d5bd578274de9`


    $.ajax({
        url: requestUrl,
        method: 'Get',
    }).then(function(response) {
        console.log(response)
        var latitude = response[0].lat
        var longitude = response[0].lon
        console.log(latitude)
        console.log(longitude)


        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&appid=7e461f5d070af7de1c2d5bd578274de9&units=imperial',
            method: 'Get',
        }).then(function(data) {
            console.log(data)
            console.log(data.current.temp)

            var currentTemp = data.current.temp + '\u00b0 F'
            var currentHumid = data.current.humidity + ' %'
            var currentWind = data.current.wind_speed + ' MPH'
            var currentUvi = data.current.uvi 

            var tempUvi = document.querySelector('#Uvi')
            var tempSpace = document.querySelector('#temp')
            var tempHumid = document.querySelector('#humidity')
            var tempWind = document.querySelector('#wind')

            tempWind.innerHTML = currentWind
            tempHumid.innerHTML = currentHumid
            tempSpace.innerHTML = currentTemp
            tempUvi.innerHTML = currentUvi
        })


    })


})
        
  