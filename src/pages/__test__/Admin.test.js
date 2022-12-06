import { render, screen, fireEvent } from '@testing-library/react';
import AdminPage from '../AdminPage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import store from '../../store'
import { userEvent } from '@testing-library/user-event';
describe("Testing Admin Page",()=>{
    const currentUser={
        userType:"Admin",
        currentUser:0,
        loginStatus:true
    }

    let storeUpdate = { ...store, currentUser};
        console.log(storeUpdate)
         test("render Add poll button",()=>{
            render(  <BrowserRouter>
                <Provider store={storeUpdate}>
                    <AdminPage />
                </Provider>
            </BrowserRouter>) 
            const AddpollBtn=screen.getByTestId("AddpollBtn")
            expect(AddpollBtn).toBeTruthy()
         })
})
