import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { addTodo, removeTodo } from './store/todosSlice'


const TodoList = () => {
    const [val, setVal] = useState('')
    const dispatch = useDispatch()
    const {items} = useSelector(state => state.todos)

    const onButtonClick = () => {
        dispatch(addTodo(val))
    }

    return   (
        <div><h3>TodoList</h3>
            <input 
                type="text"
                onChange={e => setVal(e.target.value)}
            /> <button onClick={onButtonClick}>Добавить</button>
            {items && 
                <ul>
                    {items.map(item => 
                        <li>{item.title} 
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