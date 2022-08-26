import APIUrl from "./APIUrl";
import { useState } from "react";

const PasswordReset = ()=>{
    const [email, setEmail] = useState("");
    const sendPasswordResetEmail = async (evt) => {
        evt.preventDefault();
        const response = await fetch(`${APIUrl}/forgotPassword`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON. stringify({
                email,
            }),
        });
    };
    return <form id="body" onSubmit={sendPasswordResetEmail}>
        <div className="row">
            <div className="col-5"></div> 
            <div className="col-2 text-center">
                <input 
                className="login" 
                type="email" 
                placeholder="Username or Email"
                value={email}
                onChange={(evt) => {
                    setEmail(evt.target.value);
                }} 
                /> </div>
        </div>  
        <div className="row">
            <div className="col-5"></div>
            <div className="col-2 text-center">
                <button className="BAHTUN" type="submit">Reset Email</button>
        </div>
    </div>
</form>
}

export default PasswordReset;