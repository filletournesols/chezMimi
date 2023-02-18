import './MainLogo.css'
import chezMimiLogo from '../assets/logo_chez_mimi.jpg'

const MainLogo = () => {
    return (
        <div className="logo">
            <img src={chezMimiLogo} alt="Chez mimi"/>
        </div>
    );
}

export default MainLogo;