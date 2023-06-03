import {createSlice, nanoid} from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload,
                completed: false
            }
            state.items.push(newTodo)
        },
        removeTodo: (state, action) => {
            const ind = state.items.findIndex(
                todo => todo.id === action.payload
            )
            if (ind > -1) {
                state.items.splice(ind, 1)
            }
        }
    }
})

export const {addTodo, removeTodo} = todosSlice.actions
export default todosSlice.reducer