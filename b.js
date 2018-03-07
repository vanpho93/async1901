const request = require('request');

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q='

function getTemp(cityName, cb) {
    request(URL + cityName, (error, response, body) => {
        if (error) return cb(error, null);
        const obj = JSON.parse(body);
        cb(null, obj.main.temp);
    });
}

getTemp('Hanoi', (error, temp) => {
    if (error) return console.log(error);
    console.log(temp);
});
