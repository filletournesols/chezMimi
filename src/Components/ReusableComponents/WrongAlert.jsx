const WrongAlert = ({text, cssWrongAlert, onChange}) => {
    return (
        <div>
                <p className={cssWrongAlert} onChange={onChange}>{text}</p>
        </div>
    );
}

export default WrongAlert;