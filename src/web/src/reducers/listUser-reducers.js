import {REQUEST_LIST_USER, LIST_USER_FETCH_FAIL, LIST_USER_FETCH_SUCCESSFULL, LIST_USER_HANDLE_ERROR} from '../constants/listUser-constants'

const initialState = {
    isLoading: false,
    users: [],
    error: null
}

export const userData = (state = initialState, action) => {
    switch(action.type){
    case REQUEST_LIST_USER:
        return {
            ...state,
            isLoading: true
        }
    case LIST_USER_FETCH_SUCCESSFULL:
        return {
            ...state,
            isLoading: false,
            users: action.users
        }
    case LIST_USER_FETCH_FAIL:
        return {
            ...state,
            isLoading: false,
            error: action.error
        }
    case LIST_USER_HANDLE_ERROR:
        return {
            ...state,
            error: null
        }
    default:
        return state
    }
}