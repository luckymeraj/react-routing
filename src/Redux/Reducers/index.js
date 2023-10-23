import { combineReducers } from "redux";
import { getUserListReducer } from "./getUserListReducer";
import { authenticationReducer } from "./authenticationReducer";

export const rootReducer=combineReducers({userList:getUserListReducer,auth:authenticationReducer})
