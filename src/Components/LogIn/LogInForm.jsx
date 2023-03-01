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
    const [wrongUserName, setWrongUserName] = useState(false)
    const [wrongPsw, setWrongPsw] = useState(false)

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const pswChangeHandler = (event) => {
        setEnteredPsw(event.target.value)
    }

    const wrongPswHandler = () => {
        setWrongPsw(true)
    }

    const wrongUserNameHandler = () => {
        setWrongUserName(true)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setWrongPsw(false)
        setWrongUserName(false)
        // hacer petición API
        const userData = {
            username: enteredUserName,
            password: enteredPsw
        };
        axios.post("http://localhost:8080/auth", userData)
        .then((response) => {
            console.log(response)
            console.log(response.status)
            console.log(response.data)
            localStorage.setItem('token', response.data)
            if (response.data) {
                // two-way biding
                setEnteredUserName('')
                setEnteredPsw('')
                return navigate("/takeorders")
            }
        }).catch((error) =>{
            console.log(error.response.status)
            // response.data contraseña incorrecta == 401
            // axios error usuario no encontrado 502
            if (error.response.status == 401) {
                wrongPswHandler()
            }
            if (error.response.status == 400){
                wrongUserNameHandler()
            }
        })
    }

    return (
        <div className="log_in" onSubmit={submitHandler}>
            <form className='log_in_form'>
                <Input cssInput={logInBtnUsername} text={'Nombre de usuario'} onChange={usernameChangeHandler} value={enteredUserName}></Input>
                {wrongUserName && <WrongAlert inputType={userNameInputType} cssWrongAlert={wrongAlert} text={'nombre de usuario incorrecto'}></WrongAlert>}
                <Input inputType={pswInputType} cssInput={logInBtnPsw} text={'Contraseña'} onChange={pswChangeHandler} value={enteredPsw}></Input>
                {wrongPsw && <WrongAlert cssWrongAlert={wrongAlert} text={'contraseña incorrecta'}></WrongAlert>}
                <Btn btnType={btnType} cssBtn={btn} text={'INGRESAR'}></Btn>
            </form>
        </div>
    );
}

export default LogInForm;