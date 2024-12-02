import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const Sign_up = () => {
    const{createUser}=useContext(AuthContext)
    const hendleSignUp=e=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        // console.log('sign up',email,password);
        
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            const creationTime=result?.user?.metadata?.creationTime
            
            
            const newUser={name,email,creationTime}
            // send user data to the server and database
            fetch("http://localhost:5000/users",{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                
            })
            
        })
        .catch(err=>{
            console.log('error',err);
            
        })
        
    }
    return (
        <div>
           <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
      <form  onSubmit={hendleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Sign-up</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Sign_up;