import React, { useState, useContext } from "react"
import UserContext from "./context/UserContext"
import './Login.css'
const Form = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [Login, setLogin] = useState(true)
    const [action, setAction] = useState('Login')

    const { userName } = useContext(UserContext)
    const handleClick = () => {
        // console.log('you clicked me')
        setLogin(state => !state)
        setAction(Login ? 'Login' : 'Sign Up')
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setPassword('')
        setUser('')
        setEmail('')
        setConfirmPassword('')
    }



    return (
        <>
            {/* <div className=" "> */}
            <div className="mx-3">
                <div className=" p-5 bg-white mt-3 shadow-2xl max-w-screen-sm">
                    {/* <p>{userName}</p> */}
                    <h1 className="text-black mb-4">{action}</h1>
                    {action === 'Login' ? (<><input type="text" name="email" id="email" className="form-control border-gray-500" autoFocus onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" /><br />
                        <input type="password" name="password" id="password" className="form-control border-gray-500" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Password" /><br />
                        <button type="button" className="btn btn-primary w-32 mb-2" id="buttonid" onClick={submitHandler}>Login</button>
                        <div className=" text-black" >Dont have account? <span className="text-purple-900 cursor-pointer" onClick={handleClick}>Click Here!</span></div>

                    </>) : (<> <input type="text" name="user" id="user" className="form-control border-gray-500" autoFocus onChange={(e) => setUser(e.target.value)} value={user} placeholder="User Name" /><br /><input type="text" name="email" id="email" className="form-control border-gray-500" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" /><br />
                        <input type="password" name="password" id="password" className="form-control border-gray-500" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Password" /><br /><input type="password" name="confirm-password" id="confirm-password" className="form-control border-gray-500" onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} placeholder="Confirm Password" /><br />
                        <div>
                            <button type="button" className="btn btn-primary w-32 mb-2" id="buttonid" onClick={submitHandler}>SignUp</button>
                        </div>
                        <div className=" text-black" onClick={handleClick}>Already have account? <span className="text-purple-900 cursor-pointer" >Click Here!</span></div>

                    </>)}
                </div>
            </div>
            {/* </div > */}
        </>
    )
}
export { Form };
