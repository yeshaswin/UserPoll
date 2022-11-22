import {useSelector,useDispatch} from "react-redux";
import {incNumber,decNumber} from "../actions/index"
function UserPage() {
  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch();
    return (
      <div >
        <p>User page</p>
        <div className="quantity">
      <a className="quantity_minus" title="decrement" onClick={()=>dispatch(decNumber())}><span> - </span></a>
      <input name="quantity" type="text" className="quantity_input" value={myState}></input>
      <a className="quantity_plus" title="increment" onClick={()=>dispatch(incNumber())}><span> + </span></a>
        </div>
      </div>
    );
  }
  
  export default UserPage;

