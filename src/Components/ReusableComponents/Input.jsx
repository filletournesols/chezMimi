const Input = ({ text, cssInput, inputType, onChange, value }) => {
    return (
        <div>
                <input type={inputType} className={cssInput} placeholder={text} onChange={onChange} value={value} required></input>
        </div>
    );
}

export default Input;