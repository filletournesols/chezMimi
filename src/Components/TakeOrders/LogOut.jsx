import { Form } from 'react-router-dom'

import Btn from '../ReusableComponents/Btn'
import './LogOut.css'

const LogOut = () => {
    const logOutBtn = 'log_out_btn'

    const userName = localStorage.getItem('username')

    return (
            <div className='take_orders_btns'>
                <Form action='/logout' method='post' className='form'>
                    <Btn cssBtn={logOutBtn} text={'Cerrar sesión'}></Btn>
                    <p className='user_name'>{userName}</p>
                </Form>
            </div>
    );
}

export default LogOut;