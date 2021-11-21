import {userAction, UserActionEnum} from "./types";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => async (dispatch: Dispatch<userAction>) => {
    try {
        dispatch({type: UserActionEnum.FETCH_USERS})
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setTimeout(async () => {
            dispatch({type: UserActionEnum.FETCH_USERS_SUCCESS, payload: response.data})
        }, 100)

    } catch (e) {
        dispatch({type: UserActionEnum.FETCH_USERS_ERROR, payload: 'Ошибка при загрузке пользователей' })
    }
}