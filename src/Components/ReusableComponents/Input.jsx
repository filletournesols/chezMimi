const Input = ({ text, cssInput, inputType }) => {
    return (
        <div>
                <input type={inputType} className={cssInput} placeholder={text} required></input>
        </div>
    );
}

export default Input;