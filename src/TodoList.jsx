import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { asyncDeleteTodo, asyncCreateTodo, fetchTodos } from './store/todosSlice'
import { nanoid } from '@reduxjs/toolkit'


const TodoList = () => {
    const [val, setVal] = useState('')
    const dispatch = useDispatch()
    const {items, loading, error} = useSelector(state => state.todos)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const onButtonClick = () => {
        dispatch(asyncCreateTodo({ todo: val, completed: false, id: nanoid() }))
    }

    if (error !== '') return <h5>Извините, произошла ошибка {error}</h5>
    if (loading) return <h5>Подождите</h5>


    return   (
        <div><h3>TodoList</h3>
            <input 
                type="text"
                onChange={e => setVal(e.target.value)}
            /> <button onClick={onButtonClick}>Добавить</button>
            {items && 
                <ul>
                    {items.map(item => 
                        <li key={item.id}>{item.todo} 
                            <button 
                                onClick={
                                    () => dispatch(asyncDeleteTodo(item.id))
                                }
                            >delete</button>
                        </li>
                    )}
                </ul>
            }

        </div>
    )
}  
export default TodoList