const redux = require('redux');

const initState = {
    num: 0
}

const rootReducer = (state = initState, action) => {
    return state;
}

const myStore = redux.createStore(rootReducer);
console.log(myStore.getState());