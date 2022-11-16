const wind = document.getElementById('wind').textContent;
const temp = document.getElementById('current-temp').textContent;

if (temp < 50 && wind > 3) {
    let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16)));
    document.getElementById('wind-chill').innerHTML = chill +"°F";
    }
else {
    let chill = "NA";
    document.getElementById('wind-chill').innerHTML = chill;}


