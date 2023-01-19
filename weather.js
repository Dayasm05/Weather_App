//  http://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=1cb6532aea3c298a830a71380eace21e


 let city = document.getElementById('city')
 let country = document.getElementById('country')
 let temperature = document.getElementById('temperature')
 let user_input = document.getElementById('user_input')


 let checkTemp = async()=>{
    let cityvalue = user_input.value
    // alert('its working...!')          // to check button is working or not
    if(cityvalue == ""){
        alert('please enter a city name before search')
    }
    else{
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)
        // console.log(response);
       let data = await response.json()
    //    console.log(data);
    city.textContent=data.name
    country.textContent=data.sys.country
    temperature.textContent=data.main.temp


    }
 }