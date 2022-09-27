import React, { useState } from 'react';
import Home from './Home';
import './custom.css'
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
        <div className="container">
            {!open && <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary text-center">LOGIN</h4>

                </div>
                <div className="body-form">
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><label>Username</label></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><label>Password</label></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-secondary btn-block" onClick={handleLogin}>LOGIN</button>
                        <div className="message">
                            <div><input type="checkbox" /> Remember ME</div>
                            <div><a href="#">Forgot your password</a></div>
                        </div>
                    </form>
                    <div className="social">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-google"></i></a>
                    </div>
                </div>
            </div>}
            {open && <Home />}
        </div>
    )
}

export default Login