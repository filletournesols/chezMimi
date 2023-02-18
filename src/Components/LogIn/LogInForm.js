import './LogInForm.css'

const LogInForm = () => {
    return (
        <div className="log_in">
            <form className="log_in_form">
                <input className="log_in_form_input_email" placeholder="Correo" required></input>
                <input className="log_in_form_input_psw" placeholder="Contraseña" required></input>
            </form>
        </div>
    );
}

export default LogInForm;