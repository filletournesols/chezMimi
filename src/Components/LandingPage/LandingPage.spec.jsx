import React from "react";
import { render, screen } from '@testing-library/react'
import * as router from 'react-router'

import Btn from '../ReusableComponents/Btn'
import LandingPage from './LandingPage'

describe('LandingPage Btn', () => {
    const navigate = vi.fn()

    beforeEach(() => {
    vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })

    const clickHandler = vi.fn(navigate("/login"));

    const button = screen.getByRole('button')
    fireEvent.click(button)

    // const setState = vi.mock();
    // const useStateSpy = vi.spyOn(React, "useState");
    // useStateSpy.mockImplementation((initialState) => [initialState, setState]);
    // const wrapper = render(<App />);

    it('render Landing Page', () => {
        render(<LandingPage />)
    })
    it('render Btn and its text', () => {
        render(<Btn text={'Button Test'} onClick={clickHandler}/>)
        const element = screen.getByText('Button Test')
        expect(element).toBeInTheDocument()
    })
    it('should change page', () => {
        render(<Btn text={'Button Test'} onClick={clickHandler}/>)
        expect(navigate).toHaveBeenCalledWith('/login')
    })
    // validar que se llama la función que se pasa
})