import axios from 'axios'

import { getAuthToken } from '../../util/auth'
import Btn from '../ReusableComponents/Btn'
import './OrderOptions.css'

const OrderOptions = () => {
    const breakfastBtn = 'breakfast_btn'
    const drinksBtn = 'drinks_btn'
    const regularBtn = 'regular_btn'
    const btnType = 'button'

    const token = getAuthToken()

    axios({
        method: "get",
        url: "https://leburgerqueenrestaurant.onrender.com/products",
        auth: token,
    }).then((response) =>{
        console.log(response.data);
    }).catch((error)=>{
        console.log(error.response.status)
        if (error.response.status == 401) {
            console.error("Error 401")
        }
    })

    return (
        <div className='order_options'>
            <Btn btnType={btnType} cssBtn={drinksBtn} text={'Bebestibles'}></Btn>
            <Btn btnType={btnType} cssBtn={breakfastBtn} text={'Desayuno'}></Btn>
            <Btn btnType={btnType} cssBtn={regularBtn} text={'Regular'}></Btn>
        </div>
    );
}

export default OrderOptions;