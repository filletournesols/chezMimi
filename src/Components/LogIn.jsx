import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import Logo from './ReusableComponents/Logo.jsx';
import Btn from './ReusableComponents/Btn.jsx';
import LogInForm from './LogIn/LogInForm.jsx';

import './LogIn/LogInLogo.css'
import './LogIn/LogInForm.css';
import './LogIn/LogInBtn.css';

const LogIn = () => {
    const logo = 'log_in_logo'
    const btn = 'log_in_btn'

    const navigate = useNavigate();

    const onClickHandler = (e) => {
        e.preventDefault()
        return navigate("/takeorders");
        // return <Link to="/takeorders"></Link>
    }
    // onClick={onClickHandler}

    return (
        <div className="App">
            <Logo cssLogo={logo}></Logo>
            <LogInForm></LogInForm>
            <Link to="/takeorders" style={{ textDecoration: 'none' }}>
                <Btn cssBtn={btn} text={'INGRESAR'} ></Btn>
            </Link>
        </div>
    );
}

export default LogIn;
