import MainLogo from './MainLogo';
import LogInBtn from './LogIn/LogInBtn';
import LogInForm from './LogIn/LogInForm';

const LogIn = () => {
    return (
        <div className="App">
            <MainLogo></MainLogo>
            <LogInForm></LogInForm>
            <LogInBtn></LogInBtn>
        </div>
    );
}

export default LogIn;
