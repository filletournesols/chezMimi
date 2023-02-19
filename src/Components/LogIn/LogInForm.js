import Input from './Input';

const LogInForm = () => {
    const logInBtnEmail = 'log_in_form_input_email'
    const logInBtnPsw = 'log_in_form_input_psw'
    return (
        <div className="log_in">
            <form className='log_in_form'>
                <Input cssInput={logInBtnEmail} text={'Correo'}></Input>
                <Input cssInput={logInBtnPsw} text={'Contraseña'}></Input>
            </form>
        </div>
    );
}

export default LogInForm;

/* <input className="log_in_form_input_email" placeholder="Correo" required></input>
<input className="log_in_form_input_psw" placeholder="Contraseña" required></input> */