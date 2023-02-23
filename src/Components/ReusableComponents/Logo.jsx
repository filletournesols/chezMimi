import chezMimiLogo from '../../assets/logo_chez_mimi.jpg'

const Logo = ({ cssLogo }) => {
    return (
        <div className={cssLogo}>
            <img src={chezMimiLogo} alt="Chez mimi"/>
        </div>
    );
}

export default Logo;