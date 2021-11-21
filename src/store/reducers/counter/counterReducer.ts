import {Counter, CounterActionEnum, mainAction} from "./types";

const defaultState: Counter = {
    count: 0
}

export const counterReducer = (state = defaultState, action: mainAction) => {
    switch (action.type) {
        case CounterActionEnum.INCREMENT:
            return {...state, count: state.count + action.payload}
        case CounterActionEnum.DECREMENT:
            return {...state, count: state.count - action.payload}
        default:
            return state
    }
}