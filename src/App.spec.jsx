import React from "react"
import { render, screen } from '@testing-library/react'
import * as router from 'react-router'

import App from "./App"
// import LogIn from "./Components/LogIn/LogIn"
// import LogInForm from "./Components/LogIn/LogInForm"

describe('Reusable components', () => {
    const navigate = vi.fn()

    beforeEach(() => {
    vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })

    it('render Btn', () => {
        render(<App />)
    })
})

// const opps = screen.get
// expect(opps).toBeInTheDocument()
// expect(p).toBeInTheDocument()