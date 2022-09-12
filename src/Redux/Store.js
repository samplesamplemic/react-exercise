import { createStore } from 'redux';
import { counterReducer, incrementCounter } from './CounterReducer';


export const store = createStore(counterReducer);

//callback every time <store change its value / state evolves>
// store.subscribe(() => {
//     console.log(store.getState());

// })

// store.dispatch(incrementCounter())
