import { createStore, combineReducers } from 'redux';
import { counterReducer, incrementCounter } from './CounterReducer';
import { todosReducer } from './TodosReducer';


//export const store = createStore(counterReducer);
const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer
})
export const store = createStore(rootReducer);

//callback every time <store change its value / state evolves>
// store.subscribe(() => {
//     console.log(store.getState());

// })

// store.dispatch(incrementCounter())
