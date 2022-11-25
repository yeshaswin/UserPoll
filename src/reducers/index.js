import UserReducer from "./UserReducer.ts";
import adminReducer from "./AdminReducer.ts"
import LoginReducer from "./LoginReducer.ts"
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    UserReducer,
    LoginReducer,
    adminReducer
})
export default rootReducer;