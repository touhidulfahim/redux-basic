const redux = require('redux');

//
const initState = {
    num: 0
}

//
const rootReducer = (state = initState, action) => {
    if (action.type === 'INC_NUM') {
        return {
            ...state,
            num: state.num + 1
        }
    }
    if (action.type === 'ADD_NUM') {
        return {
            ...state,
            num: state.num + action.a
        }
    }
    return state;
}

//
const myStore = redux.createStore(rootReducer);
console.log(myStore.getState());

//Subscribe

myStore.subscribe(() => {
    console.log("[Subscribe]", myStore.getState());
})

//Dispatching Actions

myStore.dispatch({
    type: 'INC_NUM'
})

myStore.dispatch({
    type: 'ADD_NUM',
    a: 34
})
