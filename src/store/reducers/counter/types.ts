export interface Counter {
    count: number;
}

export enum CounterActionEnum {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT'
}

export interface setIncrementAction {
    type: CounterActionEnum.INCREMENT;
    payload: number;
}

export interface setDecrementAction {
    type: CounterActionEnum.DECREMENT;
    payload: number;
}

export type mainAction = setIncrementAction | setDecrementAction;