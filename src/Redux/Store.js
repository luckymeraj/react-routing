import { applyMiddleware, combineReducers, createStore } from "redux";
import { getUserListReducer } from "./Reducers/getUserListReducer";
import thunk from "redux-thunk";
import { rootReducer } from "./Reducers";



export const Store=createStore(rootReducer,applyMiddleware(thunk))