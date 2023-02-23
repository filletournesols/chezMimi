const Btn = ({ text, cssBtn, btnType }) => {
    return (
        <div className={cssBtn}>
            <button type={btnType}>{text}</button>
        </div>
    );
}

export default Btn;