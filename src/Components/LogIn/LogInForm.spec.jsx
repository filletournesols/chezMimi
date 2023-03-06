import React, { useState as useStateMock } from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
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
        const button = screen.getByText('INGRESAR')
        fireEvent.click(button)
        await waitFor(() =>  {
            expect(navigate).toHaveBeenCalledWith('/takeorders')
        })
    })
})