import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./reducers/counter/counterReducer";
import thunk from "redux-thunk";
import {usersReducer} from "./reducers/users/usersReducer";

const rootReducer = combineReducers({
    count: counterReducer,
    users: usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch