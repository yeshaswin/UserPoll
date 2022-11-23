import UserReducer from "./UserReducer.ts";
import adminReducer from "./AdminReducer.ts"
import {combineReducers} from "redux";
const rootReducer=combineReducers({
    UserReducer,
    adminReducer
})
export default rootReducer;