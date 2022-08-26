import { useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import APIUrl from "./APIUrl";

import { Link } from "react-router-dom";
const Login = ()=>{
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState("");
      const navigate = useNavigate();
      const [searchParams] = useSearchParams();

      const isNewUser = searchParams.get("newUser");
      const hasPasswordBeenReset = searchParams.get("passwordReset");

      const login = async (evt) => {
        evt.preventDefault();

        try {
            const response = await fetch(`${APIUrl}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
                credentials: "include",
            });
            const data = await response.json();
            console.log(data);
            if (data.error) {
                setError(data.error);
            }else{
                navigate("/Browse");
            } 
         } catch (error) {
                setError("login API call failed. Check console for more details.");
                console.error(error); 
            }
        };
    
        return (
            <div id="body">
                <div className="streamline">STREAMLINE</div>
                <form onSubmit={login}>
            <div className="mb-3">
                    <label htmlFor="Username" className="form-label">
                        Username
                    </label>
            <input
                type="text"
                className="form-control"
                value={username}
                id="username"
                onChange={(evt)=>{
                    setUsername(evt.target.value);
                }}
            />    
            </div>
            <div className="mb-3">
                <label
                    htmlFor="password"
                    className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(evt)=> {
                    setPassword(evt.target.value);
                }}
                    />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <button className="ICANMAKEYOUDIFFERENT">
                Login
            </button>
            <Link to="/PasswordReset" className="BAHTUN">Forgot Password?</Link>
            <Link to="/CreateProfile" className="BAHTUN">Create Profile</Link>
            </form>
            </div>
        );

    };
/*
return (
    <div id="body">
    <div className="streamline">STREAMLINE</div>
            <div className="row">
                <div className="col-5"></div> 
                <div className="col-2 text-center">
                    <input className="login" type="text" placeholder="Username or Email"/> </div>
            </div>
            <div className="row">
                <div className="col-5"></div>
                <div className="col-2 text-center"> 
                    <input className="login" type="text" placeholder="Password"/> </div>
            </div>
        
        
        <div className="row">
            <div className="col-5"></div>
            <div className="col-2 text-center">
                <input className="BAHTUN" type="submit" value="Submit"/> </div>
        </div>
        <div className="row">
            <div className="col-5"></div>
            <div className="col-2 text-center">
                <Link className="BAHTUN" to="/PasswordReset" role="button">Forgot Password</Link> </div>
        </div>
        <div className="row">
            <div className="col-5"></div>
            <div className="col-2 text-center">
                <Link className="BAHTUN" to="/CreateProfile" role="button">New User</Link> </div>
        </div>
    </div>
);
*/

export default Login;