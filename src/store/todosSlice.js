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


export const asyncDeleteTodo = createAsyncThunk(
    'todos/asyncDeleteTodo',
    async (id) => {
        return axios.delete(`https://dummyjson.com/todos/${id}`)
            .then(resp => resp.data)
    }
)

export const asyncCreateTodo = createAsyncThunk(
    'todos/asyncCreateTodo',
    async ({todo, completed, id}) => {
        const newTodo = {
            todo,
            completed, 
            id
        }

        try {
            const response = await axios.post('https://dummyjson.com/todos/add', newTodo)
            return response.data
        } catch(error) {
            console.error('Error happened in todo creating', error)
            throw error;
        }
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
        builder.addCase(asyncDeleteTodo.fulfilled, (state, action) => {
            const ind = state.items.findIndex(
                todo => todo.id === action.payload.id
            )
            if (ind > -1) {
                state.items.splice(ind, 1)
            }
        }),
        builder.addCase(asyncCreateTodo.fulfilled, (state, action) => {
            const newTodo = action.payload;
            state.items.push(newTodo)
        })

    }
})

export const {addTodo, removeTodo} = todosSlice.actions
export default todosSlice.reducer