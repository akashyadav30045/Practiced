import React, { useState } from 'react'

const Login = () => {
    const[isSignin,setIsSignin]= useState(true);
    const toggleSignin = () => {
        return(
            setIsSignin(!isSignin)
            )
    }
  return (
    <div>
        <div className="background relative overflow-hidden">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        </div>
        <div className="box flex items-center ml-[550px] mt-16 absolute z-[999] h-[500px] w-[500px] bg-green-400">
            <div className="inputs flex flex-col m-[25%]">
                <h1 className="heading color text-white">{isSignin ? "Sign In": "Sign Up Now"}</h1>
                <input type="text" className="m-2 p-2"placeholder='Enail' />
                <input type="text"  className="m-2 p-2" placeholder='Password' />
                {!isSignin &&  <input type="text "  className="m-2 p-2" placeholder='Password' />}
                <button className="button m-5 text-white">{isSignin ? "Sign In": "Sign Up Now"}</button>
                <p>New to Netflix?</p><button onClick={toggleSignin} className="help text-white cursor-pointer">Sign Up Now</button>
                
            </div>
        </div>
    </div>
  )
}

export default Login