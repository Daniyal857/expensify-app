// Play Ground Redux 101
import { createStore } from 'redux';

// Action Generators - functions that return action objects

// const add = ({a, b}, c) => {
//     return a + b + c;
// }

// console.log(add({ a: 1, b: 12 }, 100));

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET',

});

//Reducers
// 1- Reducers are pure functions
// 2- never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case "SET":
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

// Printing the state every single time it changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// Action - than an object that gets sent to the store

// I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

//RESET - set the count to zero.
store.dispatch(resetCount());

//I'd like to decrement the count.
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));