import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "../ActionTypes";

const initialState = {
    loading: true,
    userList: [],
    message: ''
}

export const getUserListReducer = (state = initialState, action) => {
switch (action.type) {
    case MAKE_REQUEST:
        return{
            ...state,loading:true
        }
        
        case FAIL_REQUEST:
            return{
                ...state,
                loading:false,
                message:action.payload
            }

            case GET_USER_LIST:
                return{
                    ...state,
                    loading:false,
                    userList:action.payload
                }

    default:
        return{
            ...state
        };
}



}