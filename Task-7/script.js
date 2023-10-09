
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
const ApiKey = "07213566172a87d859a0292e88e90c23"
const picture = document.querySelector(".picture");

const NoConn = document.getElementById("NoConn");
const btns = document.querySelector(".btns")
const cross = document.getElementById("cross");



function performSearch(x) {
    
    checkConnection() ;
    if (!navigator.onLine)
        return;
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(x)}&appid=${ApiKey}`;
    fetch(url).then((response) => response.json())
        .then((data) => {
            if (data["cod"] == 200) {
                temp.innerText = data["main"]["temp"] + "°C"
                weather.innerHTML = data["weather"][0]["main"] + `<img id="wIcon" src="https://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@2x.png">`
                let w = data["weather"][0]["main"];
                let setTime = new Date(data["sys"]["sunset"] * 1000);
                let riseTime = new Date(data["sys"]["sunrise"] * 1000);

                sunrise.innerText = `${riseTime.getHours().toString().padStart(2, '0')}:${riseTime.getMinutes().toString().padStart(2, '0')} AM\n SUNRISE`;
                sunset.innerText = `${(setTime.getHours()).toString().padStart(2, '0')}:${setTime.getMinutes().toString().padStart(2, '0')} PM\n SUNSET`;

                city_name.innerText = x.toString().toUpperCase();
                let current = new Date(data["dt"] * 1000);

                sun[0].style.display = "block";
                sun[0].style.float = "left";

                sun[1].style.display = "block";
                sun[1].style.float = "right";

                let s = current.getHours();

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
                city_name.innerText="";
            }



        }).catch((error) => {
            console.log(error);

        });

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

document.body.addEventListener("load", performSearch("nagpur"))

window.addEventListener('online', performSearch("nagpur"));


button.addEventListener("click", function () {
    performSearch(searchInput.value);
});



searchInput.addEventListener("keydown", function (event) {

    if (event.keyCode === 13) {

        performSearch(searchInput.value);
    }
});

window.addEventListener('online', checkConnection());
window.addEventListener('offline', checkConnection());

cross.addEventListener('click', function () {
    NoConn.style.display = "none";
    btns.style.display = "block";
});