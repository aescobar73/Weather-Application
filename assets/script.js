var apiKey = '7e461f5d070af7de1c2d5bd578274de9'
// var searchBox = document.querySelector('#info').value
var searchButton = document.querySelector('#choose')
var cityList = document.querySelector('#city-weather')
var fiveDays = document.querySelector('#futuro')



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
            var future = data.daily[0].temp.max

            var tempUvi = document.querySelector('#Uvi')
            var tempSpace = document.querySelector('#temp')
            var tempHumid = document.querySelector('#humidity')
            var tempWind = document.querySelector('#wind')
            var tempFuturo = document.querySelector('#pasttemp')

            tempWind.innerHTML = currentWind
            tempHumid.innerHTML = currentHumid
            tempSpace.innerHTML = currentTemp
            tempUvi.innerHTML = currentUvi
            tempFuturo.innerHTML = future

            var time = moment().format('dddd, MMMM Do YYYY')
            $('#currents').text(time)

            // var changeDate = moment.unix(future).format('dddd, MMMM, Do YYYY')
            // console.log(changeDate)

            $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&exclude=current,minutely,hourly,alerts&appid=7e461f5d070af7de1c2d5bd578274de9&units=imperial',
                method: 'Get',
            }).then(function(days) {
                // console.log(days.daily[i].dt)
                for (var i = 0; i <= 5; i++) { 

                var conversion = days.data[i].dt;
                var furtureDay = new Date(conversion*1000);
                var forecast = document.createElement('ul')

                var dataTemp = days.daily[i].temp.day;
                var dataWind = days.daily[i].wind_speed;
                var dataHumid = days.daily[i].humidity

                var tempura = document.createElement('li');
                var viento = document.createElement('li');
                var humidEl = document.createElement('li');

                tempura.innerHTML = dataTemp
                viento.innerText = dataWind
                humidEl.innerHTML = dataHumid

                forecast.appendChild(tempura)
                forecast.appendChild(viento)
                forecast.appendChild(humidEl)
                fiveDays.appendChild(forecast)

                }

            })

        //     var cities = [];

        //     function renderCities(){

            
        //     cityList.innerHTML = "";

        //     for(var i=0; i < cities.length; i++) {
        //         var city = cities[i];

        //         var li = document.createElement('li');
        //         li.textContent = city;

        //         cityList.appendChild(li);
        //     }
        // }

        //     function init() {
        //         localStorage.setItem('cities', JSON.stringify(cities))
            
        //         renderCities()
            
        //     }





        })



    })


})
        
