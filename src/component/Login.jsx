import React, { useState } from 'react';
import Home from './Home';


function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [open, setOpen] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault()
        if (username === "admin" && password === "admin") {
            setOpen(true)
        } else {
            alert("Login error!");
            return;
        }

    }
    return (
        <div>
            {!open && <form className="form">
                <input placeholder='Username' onChange={e => setUsername(e.target.value)} />
                <input placeholder='Password' onChange={e => setPassword(e.target.value)} />


                <button className="btn btn-primary" onClick={handleLogin}>
                    Dang nhap
                </button>
            </form>}
            {open && <Home />}
        </div>
    )
}

export default Login