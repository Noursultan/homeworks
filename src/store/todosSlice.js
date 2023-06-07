import {createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async () => {
        return axios.get('https://dummyjson.com/todos')
            .then(
                resp => resp.data
            )
    }
)


const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        loading: false,
        error: ''
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                todo: action.payload,
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, state => {
            state.loading = true
            state.error = ''
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload.todos
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export const {addTodo, removeTodo} = todosSlice.actions
export default todosSlice.reducer