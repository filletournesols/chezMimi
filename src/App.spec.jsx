import React from "react"
import { render, screen } from '@testing-library/react'
import * as router from 'react-router'

import App from "./App"

describe('Reusable components', () => {
    const navigate = vi.fn()

    beforeEach(() => {
    vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })

    it('render Btn', () => {
        render(<App />)
    })
})
