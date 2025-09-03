import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log("User created at fb", result.user);
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, createdAt };

        // save new user info to the database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("user created in db");
            }
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
              />
            </div>
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
            <button className="btn btn-neutral mt-4">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
