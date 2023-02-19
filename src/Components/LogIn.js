import MainLogo from './MainLogo';
import LogInBtn from './LogIn/Btn';
import LogInForm from './LogIn/LogInForm';

import './LogIn/LogInForm.css';
import './LogIn/LogInBtn.css';

const LogIn = () => {
    const btn = 'log_in_btn'
    return (
        <div className="App">
            <MainLogo></MainLogo>
            <LogInForm></LogInForm>
            <LogInBtn cssBtn={btn} text={'INGRESAR'}></LogInBtn>
        </div>
    );
}

export default LogIn;
