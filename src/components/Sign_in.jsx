import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Sign_in = () => {
    const {signInUser}=useContext(AuthContext)
    const hendleSignIn=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        console.log('sign in',email,password);
        signInUser(email,password)
        .then(result=>{
            console.log(result.user);
            const lastSignInTime=result?.user?.metadata?.lastSignInTime
            const loginInfo={email,lastSignInTime}
            fetch(`http://localhost:5000/users`,{
                method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(loginInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log("update user login info",data);
                
            })
            
        })
        .catch(err=>{
            console.log(err);
            
        })
    }
    return (
        <div>
<div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
      <form  onSubmit={hendleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign-in</button>
        </div>
        <p>Don't have an account? <Link to="/sign-up">Sing Up</Link></p>
      </form>
    </div>
        </div>
    );
};

export default Sign_in;