// import React from "react"
import { render, screen } from '@testing-library/react'
// import {describe, test} from 'vitest'

import App from "./App"
// import LogIn from "./Components/LogIn/LogIn"
// import LogInForm from "./Components/LogIn/LogInForm"

describe('Reusable components', () => {
    it('render Btn', () => {
        render(<App />)
    })
})

// const opps = screen.get
// expect(opps).toBeInTheDocument()
// expect(p).toBeInTheDocument()