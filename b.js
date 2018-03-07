const request = require('request');

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q='

request(URL + 'SaiGon', (error, response, body) => {
    if (error) return console.log(error.message);
    const obj = JSON.parse(body);
    console.log(obj.main.temp);
});
