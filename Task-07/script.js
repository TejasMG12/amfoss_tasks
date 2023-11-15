//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
const wPic = document.getElementById('wPic')
const searchInput = document.getElementById("city_input");
const button = document.getElementById('Button');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const sun = document.getElementsByName('sun');
const cont = document.getElementById("cont");
const city_name = document.getElementById("city_name");
const city_time = document.getElementById("city_time");
const ApiKey = "07213566172a87d859a0292e88e90c23"
const picture = document.querySelector(".picture");

const NoConn = document.getElementById("NoConn");
const btns = document.querySelector(".btns")
const cross = document.getElementById("cross");
const wIcon = document.querySelector("#wIcon");


function performSearch(city, lon, lat) {
    checkConnection();
    if (!navigator.onLine)
        return;
    let url;
    if ((city == "" || city == null)&& lat!=undefined && lon!=undefined)
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
    else
        url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(city)}&appid=${ApiKey}`;
    fetch(url).then((response) => response.json())
        .then((data) => {
            if (data["cod"] == 200) {
                if (data["main"]["temp"] > 100)
                    temp.innerText = (parseFloat(data["main"]["temp"]) - 273).toString().substring(0, 5) + "°C"
                else
                    temp.innerText = data["main"]["temp"] + "°C"

                weather.innerHTML = data["weather"][0]["main"] + `<img id="wIcon" src="https://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@2x.png">`

                let w = data["weather"][0]["main"];
                let setTime = new Date((data["sys"]["sunset"] + data["timezone"] )* 1000);
                let riseTime = new Date((data["sys"]["sunrise"] + data["timezone"])* 1000);

                sunrise.innerText = `${riseTime.getUTCHours().toString().padStart(2, '0')}:${riseTime.getUTCMinutes().toString().padStart(2, '0')} \n SUNRISE`;
                sunset.innerText = `${(setTime.getUTCHours()).toString().padStart(2, '0')}:${setTime.getUTCMinutes().toString().padStart(2, '0')} \n SUNSET`;

                city_name.innerText = data["name"].toUpperCase();
                let current = new Date((data["dt"] + data["timezone"]) * 1000);
                city_time.innerText=`${(current.getUTCHours()).toString().padStart(2, '0')}:${current.getUTCMinutes().toString().padStart(2, '0')} `
                sun[0].style.display = "block";
                sun[0].style.float = "left";

                sun[1].style.display = "block";
                sun[1].style.float = "right";

                let s = current.getUTCHours();
                console.log(s)



                if (s < 5) {
                    cont.style.backgroundImage = "url(assets/night.jpg)";
                }
                else if (s < 9) {
                    cont.style.backgroundImage = "url(assets/sunrise.jpg)";
                }
                else if (s < 17) {
                    cont.style.backgroundImage = "url(assets/afternoon.webp)";
                    cont.style.backgroundColor = "rgb(255,255,255,0.3)"
                }
                else if (s < 20) {
                    cont.style.backgroundImage = "url(assets/evening.jpg)";
                }
                else {
                    cont.style.backgroundImage = "url(assets/night.jpg)";
                }
                picture.style.backgroundImage = "url('')"
                if (w == "Haze" && s < 18 && s > 5) {
                    wPic.src = "assets/haze.png";
                }
                else if (w == "Haze") {
                    wPic.src = "assets/haze1.png";
                }
                else if (w == "Clear") {
                    wPic.src = ""
                }
                else if (w == "Rain" && s < 18 && s > 5) {
                    wPic.src = "assets/rain.png";
                }
                else if (w == "Rain") {
                    wPic.src = "assets/rain1.png";
                }
                else if (w == "Snow" && s < 18 && s > 5) {
                    wPic.src = "assets/snow.png";
                }
                else if (w == "Snow") {
                    wPic.src = "assets/snowing.png";
                }
                else if (w == "Clouds" && s < 18 && s > 5) {
                    wPic.src = "assets/cloudy.png";
                }
                else if (w == "Clouds") {
                    wPic.src = "assets/full-moon.png";
                }
                else if (w == "Thunderstorm") {
                    wPic.src = "assets/cloud-737_256.gif";
                    picture.style.backgroundImage = "url('assets/thunder.png')"
                }

            }
            else {
                temp.innerText = "";
                weather.innerText = data["message"];
                sunrise.innerText = "";
                sunset.innerText = "";
                sun[0].style.display = "none";
                sun[1].style.display = "none";
                city_name.innerText = "";
            }



        }).catch((error) => {
            console.log(error);
            temp.innerText = "";
            weather.innerText = data[error.message];
            sunrise.innerText = "";
            sunset.innerText = "";
            sun[0].style.display = "none";
            sun[1].style.display = "none";
            city_name.innerText = "";
        });

}


function ShowTimedData(city){
    
}

















function checkConnection() {
    if (navigator.onLine) {
        NoConn.style.display = "none";
        btns.style.display = "block";

    }
    else {
        NoConn.style.display = "block";
        btns.style.display = "none";

    }
}

window.addEventListener("load", function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            // Get latitude and longitude
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            performSearch("", longitude, latitude);

        }, function (error) {
            console.log(error)

        });
    }
    else
        performSearch("kollam", longitude, latitude);

    searchInput.focus()
});

window.addEventListener('online', function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            // Get latitude and longitude
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            performSearch("", longitude, latitude);

        }, function (error) {
            console.log(error)

        });
    }
    else
        performSearch("kollam", longitude, latitude);
});


button.addEventListener("click", function () {
    performSearch(searchInput.value);
    searchInput.value = "";
});



searchInput.addEventListener("keydown", function (event) {

    if (event.keyCode === 13) {

        performSearch(searchInput.value);
        searchInput.value = "";
    }

});

window.addEventListener('online', checkConnection());
window.addEventListener('offline', checkConnection());

cross.addEventListener('click', function () {
    NoConn.style.display = "none";
    btns.style.display = "block";
});