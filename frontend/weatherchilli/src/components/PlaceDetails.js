function FetchedDetails(props) {
    return (
        <div>
            <label>{props.title}</label>
            <div className="value">{props.value}{props.unit}</div>
        </div>
    );
}

export default FetchedDetails;