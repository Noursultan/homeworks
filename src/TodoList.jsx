import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { addTodo, removeTodo, fetchTodos } from './store/todosSlice'


const TodoList = () => {
    const [val, setVal] = useState('')
    const dispatch = useDispatch()
    const {items, loading, error} = useSelector(state => state.todos)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const onButtonClick = () => {
        dispatch(addTodo(val))
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
                        <li>{item.todo} 
                            <button 
                                onClick={
                                    () => dispatch(removeTodo(item.id))
                                }
                            >X</button>
                        </li>
                    )}
                </ul>
            }

        </div>
    )
}  
export default TodoList