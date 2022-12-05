import {render,screen} from '@testing-library/react';
import AdminPage from '../AdminPage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import store from '../../store'
describe("Testing Admin Page",()=>{
    const currentUser={
        type:"Admin"
    }
    const LoginState={
        currentUser:0,
    }
    let storeUpdate = { ...store, currentUser};
    storeUpdate = { ...store, LoginState};

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
