import { useState } from "react";
import APIUrl from "./APIUrl";
import {Navigate, useNavigate } from "react-router-dom";


const CreateProfile = ()=>{
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState("");
      const navigate = useNavigate();

      const createAccount = async(evt)=>{
        evt.preventDefault();

        try {
            const response = await fetch(`${APIUrl}/newUser`, {
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
            } else {
                navigate("/");
            }
        } catch (err){
            console.error (err)
        }
      }

    return (
        <div>
            <form onSubmit={createAccount}>
            <div id="body">
                <div className="row">
                    <div className="col-5"></div> 
                    <div className="col-2 text-center">
                    <input
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={(evt)=>{
                        setUsername(evt.target.value);
                    }}
                     /> </div>
                </div>  
                <div className="row">
                    <div className="col-5"></div> 
                    <div className="col-2 text-center">
                    <input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(evt)=>{
                        setPassword(evt.target.value);
                    }}
                    /> </div>
                </div>  
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-2 text-center">
                        <input className="BAHTUN" type="submit" value="Create Account"/>
                    </div>
                </div>
            </div>
           </form>
            
           </div>
    );
};



export default CreateProfile;