import { signInWithPopup } from "firebase/auth";
import React from "react"
import {auth,provider} from "../firebase-config"
import {singInWithGoogel} from "firebase/auth"


function Login(setIsAuth){

    const singInWithGoogel=()=>{
 
         signInWithPopup(auth,provider).then((result)=>{
           setIsAuth(true);
           localStorage.setItem("isAuth",true);
        }
        )
    }
    return (<div className="login-page"> 
    <p> Sing In with google</p>
    <button className="log-in-with-google" onClick={singInWithGoogel()}>
        Sign In with Google
    </button>
    </div>);
}

export default Login;