import React, { useState, useContext } from "react"
import UserContext from "./context/UserContext"
import './Login.css'
const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const { userName } = useContext(UserContext)
    const submitHandler = (e) => {
        e.preventDefault();
        setPassword('')
        setUser('')
    }


    return (
        <>
            <div className="form-container bg-transparent shadow-blue-300 shadow-2xl">
                <div className="contents">
                    <p>{userName}</p>
                    <h1>welcome {user}</h1>
                    <h2>your password is :{password}</h2>
                    <form className="formexp"><input type="text" name="text" id="email" className="form-control" autoFocus onChange={(e) => setUser(e.target.value)} value={user} /><br />
                        <input type="password" name="password" id="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} value={password} /><br />
                        <button type="button" className="btn btn-primary" id="buttonid" onClick={submitHandler}>login</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export { Login };
