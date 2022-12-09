import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import AdminPage from '../AdminPage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import store from '../../store'
import  userEvent  from '@testing-library/user-event';
describe("Testing Admin Page",()=>{
         test("render Add poll button",async ()=>{


            render(  <BrowserRouter>
                <Provider store={store}>
                    <AdminPage />
                </Provider>
            </BrowserRouter>) 
              console.log(userEvent)

//   const user = userEvent.setup()
  const SignupLink=screen.getByTestId("Signup_link")
            await userEvent.click(SignupLink)
            // console.log(SignupLink)
            const Signup_Username = screen.getByTestId('Signup_Username')
            expect(Signup_Username ).toBeTruthy()
            // const Signup_Password = screen.getByTestId('Signup_Password')
            // const Signup_Type=screen.getByTestId('Signup_Type')
            // userEvent.type(Signup_Username, 'Admin')
            // userEvent.type(Signup_Password, '12345')
            // fireEvent.change(Signup_Type, { target: { value: 'Admin' } })
            // const Login_Link=screen.getByTestId("Login_link")
            // fireEvent.click(Login_Link)
            // const LoginUsername = screen.getByPlaceholderText('Username')
            // const LoginPassword = screen.getByPlaceholderText('Password')
            // userEvent.type(LoginUsername, 'Admin')
            // userEvent.type(LoginPassword, '12345')
            // const LoginBtn=screen.getByTestId('LoginBtn')
            // fireEvent.click(LoginBtn)
            // const AddPollbtn=screen.getByTestId('AddpollBtn')
            // expect(AddPollbtn).toBeTruthy()


         })
})
