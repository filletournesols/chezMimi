import axios from 'axios'

import { getAuthToken } from './auth'

const token = getAuthToken()

const getAxios = () => {
    axios({
    method: "get",
    url: "https://leburgerqueenrestaurant.onrender.com/products",
    auth: token,
}).then((response) =>{
    console.log(response.data)
    const breakfastFiltered = response.data.filter(product => product.type == 'Desayuno')
    localStorage.setItem('breakfast', breakfastFiltered)
    const drinksFiltered = response.data.filter(product => product.type == 'Bebestibles')
    localStorage.setItem('drinks', drinksFiltered)
    const regularFiltered = response.data.filter(product => product.type == 'Regular')
    localStorage.setItem('regular', regularFiltered)
}).catch((error)=>{
    console.log(error.response.status)
    if (error.response.status == 401) {
        console.error("Error 401")
    }
})
}