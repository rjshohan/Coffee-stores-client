import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Result } from "postcss";
import { Link } from "react-router-dom";

const Signin = () => {
  const {signInUser} = useContext(AuthContext)
  const handleSignIn = (e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);
    signInUser(email,password)
    .then(result=>{
      console.log(result.user)
      // update last login time
      const lastSignInTime = result?.user?.metadata?.lastSignInTime;
      const loginInfo = {email,lastSignInTime};
      fetch(`https://coffee-stores-server.onrender.com/users`,{
        method:"PATCH",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(loginInfo)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log("sign in info updated in db",data)
      })

    })
    .catch(error=>{
      console.log(error)
    })

  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-center font-bold">Sign In</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Sign In</button>
            <p>New to coffee drinker : <Link to="/signup">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
