import {IUser, userAction, UserActionEnum} from "./types";

const defaultState: IUser = {
    users: [],
    isLoading: false,
    error: null
}

export const usersReducer = (state = defaultState, action: userAction) => {
    switch (action.type) {
        case UserActionEnum.FETCH_USERS:
            return {isLoading: true, error: null, users: []}
        case UserActionEnum.FETCH_USERS_SUCCESS:
            return {isLoading: false, error: null, users: action.payload}
        case UserActionEnum.FETCH_USERS_ERROR:
            return {isLoading: false, error: action.payload, users: []}
        case UserActionEnum.REMOVE_USER:
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        default:
            return state
    }
}