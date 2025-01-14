import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { getAuthToken } from '../../util/auth'
import Btn from '../ReusableComponents/Btn'
import './ProductOptions.css'

const ProductOptions = () => {
    const breakfastBtn = 'breakfast_btn'
    const drinksBtn = 'drinks_btn'
    const regularBtn = 'regular_btn'
    const btnType = 'button'

    const token = getAuthToken()

    let breakfastFiltered
    let drinksFiltered
    let regularFiltered

    const [allProducts, setAllProducts] = useState([])
    const [breakfast, setBreakfast] = useState([])
    const [drinks, setDrinks] = useState([])
    const [regular, setRegular] = useState([])
    
    const [showAllProducts, setShowAllProducts] = useState(true)
    const [showBreakfast, setShowBreakfast] = useState(false)
    const [showDrinks, setShowDrinks] = useState(false)
    const [showRegular, setShowRegular] = useState(false)

    const [colorBtnBreakfast, setColorBtnBreakfast] = useState(false)
    const [colorBtnDrinks, setColorBtnDrinks] = useState(false)
    const [colorBtnRegular, setColorBtnRegular] = useState(false)

    useEffect(() => {
        axios({
            method: "get",
            url: "https://leburgerqueenrestaurant.onrender.com/products",
            auth: token,
        }).then((response) =>{
            const allProductSorted = response.data.sort((a, b) => {
                if (a.name < b.name) {
                    return -1
                }
            })
            setAllProducts(allProductSorted) 
            breakfastFiltered = response.data.filter(product => product.type == 'Desayuno').sort((a, b) => {
                if (a.name < b.name) {
                    return -1
                }
            })
            setBreakfast(breakfastFiltered)
            drinksFiltered = response.data.filter(product => product.type == 'Bebestibles').sort((a, b) => {
                if (a.name < b.name) {
                    return -1
                }
            })
            setDrinks(drinksFiltered)
            regularFiltered = response.data.filter(product => product.type == 'Regular').sort((a, b) => {
                if (a.name < b.name) {
                    return -1
                }
            })
            setRegular(regularFiltered)
        }).catch((error)=>{
            console.log(error)
            if (error.response == 401) {
                console.error("Error 401")
            }
        })
    }, [])

    const breakfastBtnHandler = () => {
        setShowAllProducts(false)
        setShowBreakfast(true)
        setColorBtnBreakfast(true)
        setShowDrinks(false)
        setColorBtnDrinks(false)
        setShowRegular(false)
        setColorBtnRegular(false)
    }
    const drinksBtnHandler = () => {
        setShowAllProducts(false)
        setShowBreakfast(false)
        setColorBtnBreakfast(false)
        setShowDrinks(true)
        setColorBtnDrinks(true)
        setShowRegular(false)
        setColorBtnRegular(false)
    }
    const regularBtnHandler = () => {
        setShowAllProducts(false)
        setShowBreakfast(false)
        setColorBtnBreakfast(false)
        setShowDrinks(false)
        setColorBtnDrinks(false)
        setShowRegular(true)
        setColorBtnRegular(true)
    }

    return (
        <div className='products'>
            <div className='order_options'>
                <Btn btnType={btnType} cssBtn={colorBtnDrinks ? drinksBtn : ''} text={'Bebestibles'} onClick={drinksBtnHandler}></Btn>
                <Btn btnType={btnType} cssBtn={colorBtnBreakfast ? breakfastBtn : ''} text={'Desayuno'} onClick={breakfastBtnHandler}></Btn>
                <Btn btnType={btnType} cssBtn={colorBtnRegular ? regularBtn : ''} text={'Regular'} onClick={regularBtnHandler}></Btn>    
            </div>
            <div className='productGrid'>
                {showAllProducts && allProducts.map((el) => <p key={el.product_id}>{el.name + " $" + el.price}</p>)}
                {showBreakfast && breakfast.map((el) => <p key={el.product_id}>{el.name + " $" + el.price}</p>)}
                {showDrinks && drinks.map((el) => <p key={el.product_id}>{el.name + " $" + el.price}</p>)}
                {showRegular && regular.map((el) => <p key={el.product_id}>{el.name + " $" + el.price}</p>)}
            </div>
        </div>
    );
}

export default ProductOptions;