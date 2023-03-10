import Btn from '../ReusableComponents/Btn'
import './OrdersBtnList.css'

const OrdersBtnList = () => {
    const ordersBtn = 'orders_btn'
    const newOrderBtn = 'new_order_btn'

    return (
                <div className='orders_btn_list'>
                    <Btn cssBtn={ordersBtn} text={'Órdenes'}></Btn>
                    <Btn cssBtn={newOrderBtn} text={'Nueva orden'}></Btn>
                </div>
    );
}

export default OrdersBtnList;