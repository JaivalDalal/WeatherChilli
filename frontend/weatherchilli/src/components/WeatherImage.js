import clear from '../images/clear.png';
import clouds from '../images/clouds.png';
import drizzle from '../images/drizzle.png';
import haze from '../images/haze.png';
import rain from '../images/rain.png';
import smoke from '../images/smoke.png';
import snow from '../images/snow.png';
import thunder from '../images/thunder.png';

function WeatherImage(props) {
    const desc = props.desc;
    let src = "";
    switch (desc) {
        case "Clear":
            src = clear;
            break;
        case "Clouds":
            src = clouds;
            break;
        case "Drizzle":
            src = drizzle;
            break;
        case "Haze":
            src = haze;
            break;
        case "Rain":
            src = rain;
            break;
        case "Smoke":
            src = smoke;
            break;
        case "Snow":
            src = snow;
            break;
        case "Thunderstorm":
            src = thunder;
            break;
    
        default:
            src = haze;
            break;
    }
    console.log(desc);
    return (
        <img src={src} alt='' />
    );
}

export default WeatherImage;