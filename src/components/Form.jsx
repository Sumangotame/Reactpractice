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
            <div className="px-3 py-1 mt-5 bg-transparent shadow-blue-300 shadow-xl mx-3 mb-5 max-w-screen-lg">
                {/* <p>{userName}</p> */}
                <div className=" mb-3 mt-5 text-white"><h1 >{action}</h1></div>
                <form className="formexp">
                    {action === 'Login' ? (<><input type="text" name="email" id="email" className="form-control" autoFocus onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" /><br />
                        <input type="password" name="password" id="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Password" /><br /><div className="forgot-password">
                            <p className=" text-white">Forgot Password? <span className="cursor-pointer text-black">Click Here!</span></p>
                        </div></>) : (<> <input type="text" name="user" id="user" className="form-control" autoFocus onChange={(e) => setUser(e.target.value)} value={user} placeholder="User Name" /><br /><input type="text" name="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" /><br />
                            <input type="password" name="password" id="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Password" /><br /><input type="password" name="confirm-password" id="confirm-password" className="form-control" onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} placeholder="Confirm Password" /><br />
                        </>)}
                    <div className="mb-5">
                        <button type="button" className="btn btn-primary w-32 mb-5" id="buttonid" onClick={submitHandler}>Login</button>
                        <div className="signup btn btn-primary mx-3 w-32 cursor-pointer mb-5" onClick={() => setAction('Sign Up')}>Sign Up</div>
                    </div>

                </form>
            </div>
            {/* </div > */}
        </>
    )
}
export { Form };
