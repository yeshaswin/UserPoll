import changeTheNumber from "./upDown";
import adminReducer from "./AdminReducer.ts"
import {combineReducers} from "redux";
const rootReducer=combineReducers({
    changeTheNumber,
    adminReducer
})
export default rootReducer;