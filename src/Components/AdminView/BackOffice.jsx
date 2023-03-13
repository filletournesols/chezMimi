import Logo from '../ReusableComponents/Logo';
import LogOut from '../TakeOrders/LogOut'
import '../TakeOrders/TakeOrders.css'

const BackOffice = () => {
    const logo = 'take_orders_logo'
    return (
        <div>
            <Logo cssLogo={logo}></Logo>
            <LogOut></LogOut>
            <h1>BACKOFFICE</h1>
        </div>
    );
}

export default BackOffice;