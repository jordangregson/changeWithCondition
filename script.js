let todayLat;
let todayLng;

let todayTemp;
let todayFeelsLike;
let todayCondition;

function geocodeLatLng() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                let todayLat = position.coords.latitude;
                let todayLng = position.coords.longitude;

                const api_url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${todayLat}&lon=${todayLng}&units=imperial&appid=554d1f11a8df60eddbddf39182838a79`;

                fetch(api_url)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {


                        //Todays Weather
                        let weather = data.weather[0].main;

                        if (weather == "Clouds") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "partly-cloudy.png"

                            var src = document.getElementById("changing-img");
                            src.appendChild(partlyCloudy);
                        }

                        else {
                            let sunny = document.createElement("img");
                            sunny.src = "sunny.png"

                            var src = document.getElementById("changing-img");
                            src.appendChild(sunny);
                        }
                    })

            })
    }
    else {
        console("Geolocation doesn't work")
    }


}

geocodeLatLng();

