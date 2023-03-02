// import React from "react"
import { render, screen } from '@testing-library/react'
// import {describe, test} from 'vitest'

/* Reusable components */
import Btn from "./Btn"
import Input from "./Input"
import WrongAlert from "./WrongAlert"
import Logo from "./Logo"

describe('Reusable components', () => {
    it('render Btn', () => {
        render(<Btn />)
    })
    // validar que se llama la función que se pasa
    it('render Input', () => {
        render(<Input />)
    })
    // validar si lee el prop de texto 
    // snapshop para ver si se ve igual que como se hace
    it('render Logo', () => {
        render(<Logo />)
    })
    it('render WrongAlert', () => {
        render(<WrongAlert />)
    })
})