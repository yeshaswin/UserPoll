import { render, screen } from '@testing-library/react';
import AdminPage from '../AdminPage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import store from '../../store'
import userEvent  from '@testing-library/user-event';
import { hasUncaughtExceptionCaptureCallback } from 'process';
describe("Testing Admin Page",()=>{
  let myStore=store
  myStore.getState().Reducer={ ...myStore.getState().Reducer,
    loginStatus:true,
    currentUser:0,
    userType:"Admin",
    users: [
    {
      userName: 'admin',
      password: 'admin',
      type: 'Admin',
      submittedPolls: []
    },
    {
      userName: 'user',
      password: 'user',
      type: 'User',
      submittedPolls: []
    }
  ],}
  const produceComponent = () =>
    render(
      <BrowserRouter>
      <Provider store={myStore}>
          <AdminPage />
      </Provider>
  </BrowserRouter>
    );

         test("render Add poll button",async ()=>{          
          produceComponent();
            const AddPollBtn=screen.getByTestId("AddpollBtn");
            expect(AddPollBtn).toBeTruthy()

         })
         test("Click Add poll button",async ()=>{          
          produceComponent();
            const AddPollBtn=screen.getByTestId("AddpollBtn");
            userEvent.click(AddPollBtn)
         })
         test("poll form to display",async()=>{
          produceComponent()
          const AddQstnBtn=screen.getByTestId("AddQstnBtn");
          const AddOptnBtn=screen.getByTestId("AddOptnBtn");
          const CreatePoll=screen.getByTestId("CreatePoll")
          expect(AddQstnBtn).toBeTruthy()
          expect(AddOptnBtn).toBeTruthy()
          expect(CreatePoll).toBeTruthy()
          
         })
})
