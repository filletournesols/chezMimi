import Logo from '../ReusableComponents/Logo'
import LogOut from './LogOut'
import OrdersBtnList from './OrdersBtnList'
import ProductOptions from './ProductOptions'
import Orders from './Orders'
import './TakeOrders.css'

const TakeOrders = () => {
    const logo = 'take_orders_logo'

    return (
        <div className='take_orders'>
            <Logo cssLogo={logo}></Logo>
            <LogOut></LogOut>
            <OrdersBtnList></OrdersBtnList>
            <ProductOptions></ProductOptions>
            <Orders></Orders>
        </div>
    );
}

export default TakeOrders;