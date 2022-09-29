
const defaultState = [];


//let todo = [{id: 1, title: 'shopping', completed: false}]

const ADD = 'TODO@ADD'
const REMOVE = 'TODO@REMOVE'
const EDIT = 'TODO@EDIT'

export function addItem(todo){
    return {

        type: ADD,
        payload: todo
    }
}

export function removeItem(todo) {
    return {
        type: REMOVE,
        payload: todo
    }
}

export function editItem(todo) {
    return {
        type: EDIT,
        payload: todo
    }
}

export function todosReducer(state = defaultState, action) {
    switch(action.type){
        case ADD: {

            return [...state, action.payload] // ||  state.concat(action.payload)
        }
        case REMOVE: {
           return state.filter(todo => todo.id !== action.payload.id)
        }
        case EDIT: {
            return state.map(todo => {
                if(todo.id === action.payload.id) {
                    return {...todo, ...action.payload}
                }
                return todo
            })
        }
        default: {
            return state
        }
    }
}

//TOOLKIT REDUX <createSlice>
// export const todo = createSlice({
//     name: 'todos',
//     initialState: [],
//     reducers: {
//         add: (state, action) => {
//             state.push(action.payload)
//         },
//         remove: (state, action) => {
//             state.filter(todo => todo.id !== action.payload.id)
//         },
//         edit: (state, action) => {
//             const {id, data} = action.payload
//             const todo = state.find(todo => todo.id === id)

//             for(let key in data) {
//                 todo[key] = data[key]
//             }
//         }
//     }
// })