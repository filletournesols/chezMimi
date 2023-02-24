import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from "axios"

import Input from '../ReusableComponents/Input.jsx';
import WrongAlert from '../ReusableComponents/WrongAlert.jsx';
import Btn from '../ReusableComponents/Btn.jsx';

const LogInForm = () => {
    const logInBtnUsername = 'log_in_form_input_user_name'
    const logInBtnPsw = 'log_in_form_input_psw'
    const wrongAlert = 'log_in_wrong_alert'
    const userNameInputType = 'text'
    const pswInputType = 'password'
    const btn = 'log_in_btn'
    const btnType = 'submit'

    const navigate = useNavigate();

    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredPsw, setEnteredPsw] = useState('')

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const pswChangeHandler = (event) => {
        setEnteredPsw(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        // hacer petición API
        const userData = {
            username: enteredUserName,
            password: enteredPsw
        };
        axios.post("https://leburgerqueenrestaurant.onrender.com/auth", userData)
        .then((response) => {
            console.log(response.status, response.data);
            localStorage.setItem('token', response.data)
            // guardar en cookie response.data
            if (response.data) {
                return navigate("/takeorders")
            }
        })
        // two-way biding
        setEnteredUserName('')
        setEnteredPsw('')
    }

    return (
        <div className="log_in" onSubmit={submitHandler}>
            <form className='log_in_form'>
                <Input cssInput={logInBtnUsername} text={'Nombre de usuario'} onChange={usernameChangeHandler} value={enteredUserName}></Input>
                <WrongAlert inputType={userNameInputType} cssWrongAlert={wrongAlert} text={'nombre de usuario incorrecto'}></WrongAlert>
                <Input inputType={pswInputType} cssInput={logInBtnPsw} text={'Contraseña'} onChange={pswChangeHandler} value={enteredPsw}></Input>
                <WrongAlert cssWrongAlert={wrongAlert} text={'contraseña incorrecta'}></WrongAlert>
                <Btn btnType={btnType} cssBtn={btn} text={'INGRESAR'}></Btn>
            </form>
        </div>
    );
}

export default LogInForm;