const Input = ({ text, cssInput }) => {
    return (
        <div>
                <input className={cssInput} placeholder={text} required></input>
        </div>
    );
}

export default Input;