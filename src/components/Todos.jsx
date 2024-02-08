import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from './redux/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const newTodo = todos.filter((todo) => todo.id !== 0)
    const [updateId, setUpdateId] = useState('')
    const [updateText, setUpdateText] = useState('')
    const handleUpdate = (id) => {
        if (updateText.trim() !== '') {
            dispatch(updateTodo({ id, newText: updateText }))
            setUpdateId('')
            setUpdateText('')
        }
        else {
            alert('provide valid information')
        }

    }

    return (
        <>
            <div className="mx-5">
                todos
            </div>
            <div className="mx-5 flex flex-col justify-center text-pretty fex-wrap list-none w-45 mb-5"> {newTodo.map((todo) => (
                <li key={todo.id}>
                    {
                        updateId === todo.id ? (<><input type="text" value={updateText} onChange={(e) => setUpdateText(e.target.value)} className='form-control mx-3' /><button className=" btn btn-success btn-sm mx-3" onClick={() => handleUpdate(todo.id)}>save</button></>)
                            :
                            (<> {todo.text}
                                <button onClick={() => dispatch(removeTodo(todo.id))} className="btn btn-danger btn-sm mx-3 my-3">delete</button>
                                <button onClick={() => setUpdateId(todo.id)} className="btn btn-warning btn-sm mx-3 my-3">update</button></>)}


                </li >

            ))
            }</div>

        </>)
}

export default Todos