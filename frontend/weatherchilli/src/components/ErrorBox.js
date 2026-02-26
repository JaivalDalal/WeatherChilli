import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPinLock } from '@fortawesome/free-solid-svg-icons';
import "./ErrorBox.css";

function ErrorBox(params) {
    return (
        <div className="card">
            <div className="img">
                <FontAwesomeIcon icon={faLocationPinLock} />
            </div>
            <div className="msg">
                <h1 className="title">Location Access Required!</h1>
                <p className="text">Please give location permission in order to help us detect your current geolocation.</p>
            </div>
        </div>
    );
}

export default ErrorBox