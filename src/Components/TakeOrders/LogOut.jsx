import { Form } from 'react-router-dom'

import Btn from '../ReusableComponents/Btn'
import Logo from '../ReusableComponents/Logo'
import './LogOut.css'

const LogOut = () => {
    const logo = 'take_orders_logo'
    const logOutBtn = 'log_out_btn'

    const userName = localStorage.getItem('username')
    const role = localStorage.getItem('role')
    const nameClassCondition = role == 'waiter' && 'waiter' || role == 'chef' && 'chef'|| role == 'admin' && 'admin' || role == 'superadmin' && 'superadmin'

    return (
        <div>
            <Logo cssLogo={logo}></Logo>
            <div className='take_orders_btns'>
                <Form action='/logout' method='post' className='form'>
                    <Btn cssBtn={logOutBtn} text={'Cerrar sesión'}></Btn>
                    <p className={nameClassCondition}>{userName}</p>
                </Form>
            </div>
        </div>
    );
}

export default LogOut;