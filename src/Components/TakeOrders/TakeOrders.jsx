import Logo from '../ReusableComponents/Logo'
import LogOut from './LogOut'
import OrdersBtnList from './OrdersBtnList'
import OrderOptions from './OrderOptions'
import './TakeOrders.css'

const TakeOrders = () => {
    const logo = 'take_orders_logo'

    return (
        <div className='take_orders'>
            <Logo cssLogo={logo}></Logo>
            <LogOut></LogOut>
            <OrdersBtnList></OrdersBtnList>
            <OrderOptions></OrderOptions>
        </div>
    );
}

export default TakeOrders;