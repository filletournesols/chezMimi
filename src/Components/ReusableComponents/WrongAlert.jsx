const WrongAlert = ({text, cssWrongAlert}) => {
    return (
        <div>
                <p className={cssWrongAlert}>{text}</p>
        </div>
    );
}

export default WrongAlert;