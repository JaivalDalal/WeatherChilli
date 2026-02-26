import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import FetchedDetails from './PlaceDetails';
import { useState } from 'react';
import WeatherImage from './WeatherImage';


function DataBox(props) {

    const apiKey = '1d52b24ff096ba14b98364c8b5f0b635';
    const [temperature, setTemperature] = useState();
    const [feelsLike, setFeelsLike] = useState();
    const [humidity, setHumidity] = useState();
    const [visibility, setVisibility] = useState();
    const [windSpeed, setWindSpeed] = useState();
    const [country, setCountry] = useState();
    const [weatherMain, setWeatherMain] = useState();
    const [city, setCity] = useState();

    if (props && !temperature) {
        console.log(props);
        showPos(props);
    }

    function showPos(pos) {
        const lat = pos.lat;
        const lon = pos.lon;
        console.log(lat + "    " + lon);
        const getWeatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        fetch(getWeatherDataURL)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setTemperature(data.main.temp);
                setFeelsLike(data.main.feels_like);
                setHumidity(data.main.humidity);
                setVisibility(data.visibility);
                setWindSpeed(data.wind.speed);
                setCountry(data.sys.country);
                setWeatherMain(data.weather[0].main);
                setCity(document.querySelector('.city').value);
                setCity(data.name);
            });
    }

    function fetchCity(event) {
        event.preventDefault();
        const city = document.querySelector('form .city').value;
        const getLatLonURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
        fetch(getLatLonURL)
            .then(resp => resp.json())
            .then(data => {
                let lat = data[0].lat;
                let lon = data[0].lon;
                showPos({lat: lat, lon: lon })
            });
    }

    return (
        <div className="weather-info-box">
            <section className="place-details">
                <form onSubmit={fetchCity} method="post">
                    <div className="wrapper">
                        <input type="text" placeholder="Enter the city" className='city' required />
                        <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                </form>
                <section className="place">
                    <div className="weather-icon"><WeatherImage desc={weatherMain} /></div>
                    <div className="place-name">
                        <h1 className="city">{city}</h1>
                        <h2 className="country">{country}</h2>
                        <div className="time-details"></div>
                    </div>
                </section>
            </section>

            <section className="weather-details">
                <div className="primary-details">
                    <h1 className="temperature">{temperature}&deg;C</h1>
                    <div className="weather-main">{weatherMain}</div>
                </div>
                <div className="secondary-details">
                    <FetchedDetails title="Temperature" value={temperature} unit="&deg;C" />
                    <FetchedDetails title="Feels Like" value={feelsLike} unit="&deg;C" />
                    <FetchedDetails title="Humidity" value={humidity} unit="%" />
                    <FetchedDetails title="Visibility" value={visibility} unit=" mi" />
                    <FetchedDetails title="Wind Speed" value={windSpeed} unit=" Km/h" />
                </div>
            </section>
        </div>
    );
}

export default DataBox;
