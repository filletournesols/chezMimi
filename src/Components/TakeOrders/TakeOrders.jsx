import { Form } from 'react-router-dom'

import Btn from '../ReusableComponents/Btn'
// import logout from '../../util/auth'

const TakeOrders = () => {
    // cambiar nombre clase botón
    const btn = 'log_in_btn'
    // const btnType = 'button'
    // btnType={btnType} 

    return (
        <div>
            <h1>PARA TODO EL DETALLE DE LAS ÓRDENES</h1>
            <Form action='/logout' method='post'>
            <Btn cssBtn={btn} text={'Cerrar sesión'}></Btn>
            </Form>
        </div>
    );
}

export default TakeOrders;