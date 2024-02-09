import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/todoSlice'
import Todos from './Todos'


function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            dispatch(addTodo(input))
            setInput('')
        }

        else {
            alert("null value in input")
        }

    }
    return (
        <>
            <form onSubmit={addTodoHandler} className="p-3">
                <input type="text"
                    className=" bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-"
                    placeholder="enter todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button className="btn btn-md btn-primary mx-3 px-10">submit</button>
            </form>
            <Todos />

        </>

    )
}

export default AddTodo