const Btn = ({ text, cssBtn, btnType, onClick }) => {
    return (
        <div className={cssBtn}>
            <button type={btnType} onClick={onClick}>{text}</button>
        </div>
    );
}

export default Btn;