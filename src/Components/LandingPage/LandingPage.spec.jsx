import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import * as router from 'react-router'

import LandingPage from './LandingPage'

describe('LandingPage Btn', () => {
    const navigate = vi.fn()

    beforeEach(() => {
    vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })

    it('render Landing Page and change to /login', () => {
        render(<LandingPage />)
        const button = screen.getByText('INGRESAR')
        fireEvent.click(button)
        expect(navigate).toHaveBeenCalledWith('/login')
    })
})