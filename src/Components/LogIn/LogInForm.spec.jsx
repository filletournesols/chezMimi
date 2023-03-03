import React, { useState as useStateMock } from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import * as router from 'react-router'
import axios from "axios";

import LogInForm from "./LogInForm";

vi.mock('axios')

const navigate = vi.fn()

beforeEach(() => {
    vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

axios.post.mockResolvedValue({
    data: 'token',
    status: 200
})

describe('LoginForm', () => {
    it('render LogInForm', async () => {
        render(<LogInForm />)

        const myPromise = new Promise((resolve, reject) => {
            const form = screen.getByTestId('login_form')
            // fireEvent.submit(form)
            const button = screen.getByText('INGRESAR')
            fireEvent.click(button)
            resolve()
        });

        // const setWrongPsw = vi.fn()
        // const useStateSpy = vi.spyOn(React, "useState");
        // useStateSpy.mockImplementation((wrongPsw) => [wrongPsw, setWrongPsw]);

        // const userNameInput = screen.getByPlaceholderText('Nombre de usuario')
        // const pswInput = screen.getByPlaceholderText('Contraseña')

        // const form = screen.getByTestId('login_form')
        // // fireEvent.submit(form)
        // const button = screen.getByText('INGRESAR')
        // fireEvent.click(button)
        // console.log(window.location.pathname)
        await myPromise
        // console.log(window.location.pathname)
        expect(navigate).toHaveBeenCalled()
        // expect(window.location.pathname).toBe('/takeorders')
    })
})