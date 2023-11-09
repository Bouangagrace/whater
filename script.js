document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'acf1c631029e753decf60f84d04ee763'; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').textContent = city;
            let temp = document.getElementById('temperature').textContent = data.main.temp + " °";
            let totoi = document.getElementById('weather-conditions').textContent = data.weather[0].description;
        console.log(data);

        })
            
});

