import Logo from './ReusableComponents/Logo';
import LogInBtn from './ReusableComponents/Btn';
import LogInForm from './LogIn/LogInForm';

import './LogIn/LogInLogo.css'
import './LogIn/LogInForm.css';
import './LogIn/LogInBtn.css';

const LogIn = () => {
    const logo = 'log_in_logo'
    const btn = 'log_in_btn'
    return (
        <div className="App">
            <Logo cssLogo={logo}></Logo>
            <LogInForm></LogInForm>
            <LogInBtn cssBtn={btn} text={'INGRESAR'}></LogInBtn>
        </div>
    );
}

export default LogIn;
