const Btn = ({text, cssBtn}) => {
    return (
        <div className={cssBtn}>
            <button type="button">{text}</button>
        </div>
    );
}

export default Btn;