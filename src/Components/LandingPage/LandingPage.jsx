import { useNavigate } from 'react-router-dom'

import Logo from '../ReusableComponents/Logo.jsx';
import Btn from '../ReusableComponents/Btn.jsx';
import '../LogIn/LogInLogo.css'
import './LandingPage.css'

const LandingPage = () => {
    const logo = 'log_in_logo'
    const btn = 'home_btn'
    const btnType = 'button'

    const navigate = useNavigate();

    const clickHandler = (e) => {
        e.preventDefault()
        return navigate("/login");
    }

    return (
        <div className='home'>
            <Logo cssLogo={logo}></Logo>
            <Btn btnType={btnType} cssBtn={btn} text={'INGRESAR'} onClick={clickHandler}></Btn>
        </div>
    );
}

export default LandingPage;