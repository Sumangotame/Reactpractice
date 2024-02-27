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
            <div className='p-2'>
                <h2 className='px-2'>TO-DO'S</h2>
                <div className="flex flex-col justify-center text-pretty flex-wrap list-none max-w-xl"> {newTodo.map((todo) => (
                    <li className="border-solid border-black my-2 flex justify-center items-center bg-green-700 text-5xl font-bold" key={todo.id}>
                        {
                            updateId === todo.id ? (<><input type="text" value={updateText} onChange={(e) => setUpdateText(e.target.value)} className='form-control mb-3 mt-3' /><button className=" btn btn-success btn-sm" onClick={() => handleUpdate(todo.id)}>save</button></>)
                                :
                                (<> <span className=" text-xl flex-1 p-3">{todo.text}</span>
                                    <span className=" float-right">
                                        <button onClick={() => dispatch(removeTodo(todo.id))} className="btn btn-danger btn-md px-2  mb-2">delete</button>
                                        <button onClick={() => setUpdateId(todo.id)} className="btn btn-warning btn-md mx-2 px-2 mb-2 text-slate-950">update</button>
                                    </span></>)}
                    </li >

                ))
                }</div>
            </div>

        </>)
}

export default Todos