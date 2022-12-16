import { render, screen,waitFor } from '@testing-library/react';
import LoginPage from '../LoginPage';
import { BrowserRouter ,Router} from 'react-router-dom';
import { Provider } from "react-redux"
import store from '../../store'
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history'
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
    test("redirect to signup page",async  () => {
        const history = createMemoryHistory()

        render(<Router location={history.location} navigator={history}>
            <Provider store={store}>
                <LoginPage />
            </Provider>
        </Router>)
        const DisplaySignupLink = screen.getByTestId('Signup_link')
        expect(DisplaySignupLink).toBeTruthy()
        await userEvent.click(screen.getByText(/Sign-Up/i))
        expect(history.location.pathname).toBe('/signup');
        waitFor(() => {
            expect(screen.getByText(/Already have an Account?/i)).toBeInTheDocument()
        });
        
    })

})
