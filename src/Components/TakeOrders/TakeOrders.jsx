import { Form } from 'react-router-dom'

import Btn from '../ReusableComponents/Btn'
import Logo from '../ReusableComponents/Logo'
import './TakeOrders.css'

const TakeOrders = () => {
    const logo = 'take_orders_logo'
    const logOutBtn = 'log_out_btn'
    const ordersBtn = 'orders_btn'
    const newOrderBtn = 'new_order_btn'
    const breakfastBtn = 'breakfast_btn'
    const drinksBtn = 'drinks_btn'
    const regularBtn = 'regular_btn'

    return (
        // <div>
            <div className='take_orders'>
                <Logo cssLogo={logo}></Logo>
            {/* </div> */}
            {/* <div className='take_orders_btns'> */}
                <Form action='/logout' method='post' className='form'>
                    <Btn cssBtn={logOutBtn} text={'Cerrar sesión'}></Btn>
                    <label className='user_name'>NOMBRE</label>
                </Form>
                <div className='orders_btn_list'>
                    <Btn cssBtn={ordersBtn} text={'Órdenes'}></Btn>
                    <Btn cssBtn={newOrderBtn} text={'Nueva orden'}></Btn>
                </div>
                <div className='order_options'>
                    <Btn cssBtn={drinksBtn} text={'Bebestibles'}></Btn>
                    <Btn cssBtn={breakfastBtn} text={'Desayuno'}></Btn>
                    <Btn cssBtn={regularBtn} text={'Regular'}></Btn>
                </div>
            {/* </div> */}
        </div>
    );
}

export default TakeOrders;