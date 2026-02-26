const expr = require('express');
const app = expr();
const https = require('https');

const PORT = 3880;
const apiKey = '1d52b24ff096ba14b98364c8b5f0b635';

app.get('/citydata/:city', (req, res) => {
    let city = req.params.city;
    let placeData;
    let weatherData;

    const getLatLonURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

    https.get(getLatLonURL, (resp) => {
        resp.on("data", (data) => {
            placeData = JSON.parse(data);
            let lat = placeData[0].lat;
            let lon = placeData[0].lon;
            const getWeatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
            https.get(getWeatherDataURL, (resp) => {
                resp.on('data', (data) => {
                    weatherData = JSON.parse(data);
                    console.log(weatherData);
                    res.send(weatherData)
                });
            });
        });
    });
});

app.get('/locdata/:lat-:lon', (req, res) => {
    let lat = req.params.lat;
    let lon = req.params.lon;
    const getWeatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    https.get(getWeatherDataURL, (resp) => {
        resp.on('data', (data) => {
            weatherData = JSON.parse(data);
            // console.log(weatherData);
            res.send(weatherData)
        });
    });
    // console.log(req.params);
})

app.listen(PORT, () => {
    console.log(`Server active at http://localhost:${PORT}`);
})