import React, { useState, useContext } from "react"
import UserContext from "./context/UserContext"
import './Login.css'
const Form = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { userName } = useContext(UserContext)
    const submitHandler = (e) => {
        e.preventDefault();
        setAction('Login')
        setPassword('')
        setUser('')
    }

    const [action, setAction] = useState('Login')


    return (
        <>
            {/* <div className=" "> */}
            <div className="mx-1">
                <div className="p-2 bg-white mt-3 shadow-blue-300 shadow-xl max-w-screen-lg">
                    {/* <p>{userName}</p> */}
                    <h1 className="text-black">{action}</h1>
                    {action === 'Login' ? (<><input type="text" name="email" id="email" className="form-control" autoFocus onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" /><br />
                        <input type="password" name="password" id="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Password" /><br />
                        <p className=" text-black">Forgot Password? <span className="cursor-pointer text-purple-700">Click Here!</span></p>
                    </>) : (<> <input type="text" name="user" id="user" className="form-control" autoFocus onChange={(e) => setUser(e.target.value)} value={user} placeholder="User Name" /><br /><input type="text" name="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" /><br />
                        <input type="password" name="password" id="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Password" /><br /><input type="password" name="confirm-password" id="confirm-password" className="form-control" onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} placeholder="Confirm Password" /><br />
                    </>)}
                    <div>
                        <button type="button" className="btn btn-primary w-32 " id="buttonid" onClick={submitHandler}>Login</button>
                        <div className="signup btn btn-primary mx-3 w-32 cursor-pointer" onClick={() => setAction('Sign Up')}>Sign Up</div>
                    </div>

                </div>
            </div>
            {/* </div > */}
        </>
    )
}
export { Form };
