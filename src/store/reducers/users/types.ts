export interface IUser {
    users: any[];
    isLoading: boolean;
    error: string | null;
}

export enum UserActionEnum {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    REMOVE_USER = 'REMOVE_USER'
}

export interface FetchUsersAction {
    type: UserActionEnum.FETCH_USERS
}

export interface FetchUsersSuccessAction {
    type: UserActionEnum.FETCH_USERS_SUCCESS,
    payload: any[]
}

export interface FetchUsersErrorAction {
    type: UserActionEnum.FETCH_USERS_ERROR,
    payload: string
}

export interface RemoveUserAction {
    type: UserActionEnum.REMOVE_USER,
    payload: any
}

export type userAction =
    FetchUsersAction |
    FetchUsersSuccessAction |
    FetchUsersErrorAction |
    RemoveUserAction