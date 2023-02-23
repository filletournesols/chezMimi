import Input from '../ReusableComponents/Input.jsx';
import WrongAlert from '../ReusableComponents/WrongAlert.jsx';

const LogInForm = () => {
    const logInBtnEmail = 'log_in_form_input_email'
    const logInBtnPsw = 'log_in_form_input_psw'
    const wrongAlert = 'log_in_wrong_alert'
    const email = 'email'
    const psw = 'password'
    return (
        <div className="log_in">
            <form className='log_in_form'>
                <Input cssInput={logInBtnEmail} text={'Correo'}></Input>
                <WrongAlert inputType={email} cssWrongAlert={wrongAlert} text={'correo incorrecto'}></WrongAlert>
                <Input inputType={psw} cssInput={logInBtnPsw} text={'Contraseña'}></Input>
                <WrongAlert cssWrongAlert={wrongAlert} text={'contraseña incorrecta'}></WrongAlert>
            </form>
        </div>
    );
}

export default LogInForm;

/* <input className="log_in_form_input_email" placeholder="Correo" required></input>
<input className="log_in_form_input_psw" placeholder="Contraseña" required></input> */