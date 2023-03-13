import React, { useState, useEffect } from 'react'
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

    let breakfastFiltered
    let drinksFiltered
    let regularFiltered

    const [breakfast, setBreakfast] = useState([])
    const [showBreakfast, setShowBreakfast] = useState(false)
    const [drinks, setDrinks] = useState([])
    const [showDrinks, setShowDrinks] = useState(false)
    const [regular, setRegular] = useState([])
    const [showRegular, setShowRegular] = useState(false)

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:8080/products",
            auth: token,
        }).then((response) =>{
            console.log(response.data)
            // todos = response.data
            // setTodos(response.data)
            // response.data.map((el) => {
            //     todos.push(el)
            // })
            breakfastFiltered = response.data.filter(product => product.type == 'Desayuno')
            setBreakfast(breakfastFiltered)
            drinksFiltered = response.data.filter(product => product.type == 'Bebestibles')
            setDrinks(drinksFiltered)
            regularFiltered = response.data.filter(product => product.type == 'Regular')
            setRegular(regularFiltered)
        }).catch((error)=>{
            console.log(error)
            if (error.response == 401) {
                console.error("Error 401")
            }
        })
    }, [])

    const breakfastBtnHandler = () => {
        setShowDrinks(false)
        setShowRegular(false)
        setShowBreakfast(true)
    }
    const drinksBtnHandler = () => {
        setShowRegular(false)
        setShowBreakfast(false)
        setShowDrinks(true)
    }
    const regularBtnHandler = () => {
        setShowDrinks(false)
        setShowBreakfast(false)
        setShowRegular(true)
    }

    /* colocar un componente luego de los 3 botones 
    el cual debe mostrar bebestibles, desayuno o regular dependiendo del botón que se seleccione.
    Debe poder ir intercambiando lo que muestra; ocultarse o mostrar la información 
    onClick={}*/
    return (
        <div className='order_options'>
            <Btn btnType={btnType} cssBtn={drinksBtn} text={'Bebestibles'} onClick={drinksBtnHandler}></Btn>
            <Btn btnType={btnType} cssBtn={breakfastBtn} text={'Desayuno'} onClick={breakfastBtnHandler}></Btn>
            <Btn btnType={btnType} cssBtn={regularBtn} text={'Regular'} onClick={regularBtnHandler}></Btn>
            <div className='productGrid'>
                {showBreakfast == true && breakfast.map((el) => <p key={el.product_id}>{el.name}</p>)}
                {showDrinks == true && drinks.map((el) => <p key={el.product_id}>{el.name}</p>)}
                {showRegular == true && regular.map((el) => <p key={el.product_id}>{el.name}</p>)}
            </div>
        </div>
    );
}

export default OrderOptions;