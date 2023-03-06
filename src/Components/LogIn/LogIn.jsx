import Logo from '../ReusableComponents/Logo.jsx';
import LogInForm from './LogInForm.jsx';

import './LogInLogo.css'
import './LogInForm.css';
import './LogInBtn.css';

const LogIn = () => {
    const logo = 'log_in_logo'

    return (
        <div>
            <Logo cssLogo={logo}></Logo>
            <LogInForm></LogInForm>
        </div>
    );
}

export default LogIn;
