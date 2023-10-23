import { MAKE_REQUEST, MAKE_USER_SIGN_IN, USER_SIGN_IN, USER_SIGN_OUT } from "../ActionTypes";

const initialState = {
    loading: false,
    details: {}
}
export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {

        case MAKE_USER_SIGN_IN:
            console.log('MAKE_USER_SIGN_IN')

            return {
                ...state, loading: true
            }
        case USER_SIGN_IN:
            console.log('USER_SIGN_IN')

            return {
                ...state, loading: false, details: action.payload
            }
        case USER_SIGN_OUT:
            console.log('USER_SIGN_OUT')

            return {
                ...state, loading: false, details: action.payload
            }
        default:
            console.log('third')

            return { ...state }
    }

}