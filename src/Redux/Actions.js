import axios from "axios";
import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST, MAKE_USER_SIGN_IN, USER_SIGN_IN, USER_SIGN_OUT } from "./ActionTypes";
import toast from "react-hot-toast";

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

export const failRequest = (error) => {
    return {
        type: FAIL_REQUEST, payload: error
    }
}
export const getUserList = (data) => {
    return {
        type: GET_USER_LIST, payload: data
    }
}

export const makeLoginRequest = () => {
    return {
        type: MAKE_USER_SIGN_IN
    }
}

export const getToken = (data) => {
    return {
        type: USER_SIGN_IN, payload: data
    }
}
export const deleteToken=()=>{
    return{
        type:USER_SIGN_OUT,payload:{}
    }
}





export const fetchUserList = () => {
    return async (dispatch) => {

        dispatch(makeRequest)

        try {
            const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            dispatch(getUserList(data))

        } catch (error) {
            dispatch(failRequest(error))

        }
    }
}

export const signIn = () => {
    return async (dispatch) => {
        dispatch(makeLoginRequest())
            const details = { token: 'token123', userRole: 'SUPER_ADMIN' }
           setTimeout(()=>{
            dispatch(getToken(details))
            toast('login')
           },5000)
        
    }
}

export const signOut = () => {
    return async (dispatch) => {
        dispatch(makeLoginRequest())
           setTimeout(()=>{
            dispatch(deleteToken())
            toast('logout')
           },5000)
        
    }
}

