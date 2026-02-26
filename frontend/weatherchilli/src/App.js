// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import FetchedDetails from './components/PlaceDetails';
import { useEffect, useState } from 'react';
import DataBox from './components/DataBox';
import ErrorBox from './components/ErrorBox';
// import WeatherImage from './components/WeatherImage';


function App() {

    // const apiKey = '1d52b24ff096ba14b98364c8b5f0b635';
    const [locationPermission, setLocationPermission] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    // const [temperature, setTemperature] = useState();
    // const [feelsLike, setFeelsLike] = useState();
    // const [humidity, setHumidity] = useState();
    // const [visibility, setVisibility] = useState();
    // const [windSpeed, setWindSpeed] = useState();
    // const [country, setCountry] = useState();
    // const [weatherMain, setWeatherMain] = useState();
    // const [city, setCity] = useState();

    // function showPos(pos) {
    //     const lat = pos.coords.latitude;
    //     const lon = pos.coords.longitude;
    //     console.log(lat + "    " + lon);
    //     const getWeatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    //     fetch(getWeatherDataURL)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             setTemperature(data.main.temp);
    //             setFeelsLike(data.main.feels_like);
    //             setHumidity(data.main.humidity);
    //             setVisibility(data.visibility);
    //             setWindSpeed(data.wind.speed);
    //             setCountry(data.sys.country);
    //             setWeatherMain(data.weather[0].main);
    //             setCity(document.querySelector('.city').value);
    //             setCity(data.name);
    //         });
    // }

    const checkGeolocationPermission = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setLocationPermission(true);
                setUserLocation({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                });
                console.log(userLocation);
            });
        } else { setLocationPermission(false); }
    }
    useEffect(() => {
        checkGeolocationPermission();
    }, []);


    if (locationPermission) {
        return <DataBox lat={userLocation.latitude} lon={userLocation.longitude} />;
    } else return <ErrorBox />;

    // function fetchCity(event) {
    //     event.preventDefault();
    //     const city = document.querySelector('form .city').value;
    //     const getLatLonURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    //     fetch(getLatLonURL)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             let lat = data[0].lat;
    //             let lon = data[0].lon;
    //             showPos({coords:{latitude:lat,longitude:lon}})
    //         });
    // }

    // return (
    //     <div className="weather-info-box">
    //         <section className="place-details">
    //             <form onSubmit={fetchCity} method="post">
    //                 <div className="wrapper">
    //                     <input type="text" placeholder="Enter the city" className='city' required />
    //                     <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    //                 </div>
    //             </form>
    //             <section className="place">
    //                 <div className="weather-icon"><WeatherImage desc={weatherMain} /></div>
    //                 <div className="place-name">
    //                     <h1 className="city">{city}</h1>
    //                     <h2 className="country">{country}</h2>
    //                     <div className="time-details"></div>
    //                 </div>
    //             </section>
    //         </section>

    //         <section className="weather-details">
    //             <div className="primary-details">
    //                 <h1 className="temperature">{temperature}&deg;C</h1>
    //                 <div className="weather-main">{weatherMain}</div>
    //             </div>
    //             <div className="secondary-details">
    //                 <FetchedDetails title="Temperature" value={temperature} unit="&deg;C" />
    //                 <FetchedDetails title="Feels Like" value={feelsLike} unit="&deg;C" />
    //                 <FetchedDetails title="Humidity" value={humidity} unit="%" />
    //                 <FetchedDetails title="Visibility" value={visibility} unit=" mi" />
    //                 <FetchedDetails title="Wind Speed" value={windSpeed} unit=" Km/h" />
    //             </div>
    //         </section>
    //     </div>
    // );
}

export default App;
