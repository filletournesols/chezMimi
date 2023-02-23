import Logo from './ReusableComponents/Logo.jsx';
import LogInForm from './LogIn/LogInForm.jsx';

import './LogIn/LogInLogo.css'
import './LogIn/LogInForm.css';
import './LogIn/LogInBtn.css';

const LogIn = () => {
    const logo = 'log_in_logo'

    return (
        <div className="App">
            <Logo cssLogo={logo}></Logo>
            <LogInForm></LogInForm>
        </div>
    );
}

export default LogIn;
