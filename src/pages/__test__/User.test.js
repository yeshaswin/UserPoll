import { render, screen } from '@testing-library/react';
import UserPage from '../UserPage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import store from '../../store'
describe("Testing User Page",()=>{
  let myStore=store
  myStore.getState().Reducer={ ...myStore.getState().Reducer,
    loginStatus:true,
    currentUser:1,
    userType:"User",
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
          <UserPage />
      </Provider>
  </BrowserRouter>
    );

         test("render User component",async ()=>{          
          produceComponent();
            // const AddPollBtn=screen.getByTestId("AddpollBtn");
            // expect(AddPollBtn).toBeTruthy()

         })
})
