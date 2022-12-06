import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import store from '../../store'
import userEvent from '@testing-library/user-event';

describe('tesating the LoginPage component', () => {


    test("render username input", () => {
        render(<BrowserRouter>
            <Provider store={store}>
                <LoginPage />
            </Provider>
        </BrowserRouter>)
        const DisplayUsername = screen.getByPlaceholderText('Username')
        expect(DisplayUsername).toBeTruthy()
    })
    test("render password input", () => {
        render(<BrowserRouter>
            <Provider store={store}>
                <LoginPage />
            </Provider>
        </BrowserRouter>)
        const DisplayPassword = screen.getByPlaceholderText('Password')
        expect(DisplayPassword).toBeTruthy()
    })
    test("render Login Button", () => {
        render(<BrowserRouter>
            <Provider store={store}>
                <LoginPage />
            </Provider>
        </BrowserRouter>)
        const DisplayLoginButton = screen.getByDisplayValue('Login')
        expect(DisplayLoginButton).toBeTruthy()
    })
    test("render Signup Button", () => {
        render(<BrowserRouter>
            <Provider store={store}>
                <LoginPage />
            </Provider>
        </BrowserRouter>)
        const DisplaySignupLink = screen.getByTestId('Signup_link')
        expect(DisplaySignupLink).toBeTruthy()
    })
    test("login button test", () => {
        render(<BrowserRouter>
            <Provider store={store}>
                <LoginPage />
            </Provider>
        </BrowserRouter>)
        const DisplayUsername = screen.getByPlaceholderText('Username')
        const DisplayPassword = screen.getByPlaceholderText('Password')
        userEvent.type(DisplayUsername, '')
        userEvent.type(DisplayPassword, '')
        expect(DisplayUsername).toHaveAttribute('required')
        expect(DisplayPassword).toHaveAttribute('required')
        expect(DisplayPassword).toHaveAttribute('type', 'password')
    })
})
