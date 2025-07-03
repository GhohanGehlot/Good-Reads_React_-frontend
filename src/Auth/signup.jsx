import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {signup} from "Redux/slices/authSlice";

export default function SignUp(){

    const dispatch = useDispatch();
    const navigate = useNavigate();


       const [signupDetails, setSignupDetails] = useState({
            email: '',
            password: '',
            username: '',
        })
    
        function handleFormChange(e){
            const {name , value } = e.target;
            setSignupDetails({
                ...signupDetails,
                [ name]: value
            });
        }

        function resetForm(){
            setSignupDetails({
            email: '',
            password: '',
            username: '',
        })
        }
    
        async function onSubmit(e){
            e.preventDefault();
           const response = await dispatch(signup(signupDetails));
          if(response?.payload?.data){
            navigate("/signin")
          }
          resetForm();
        }
    

    return(
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div>
                <h1 className="text-white text-5xl">Create a new Account</h1>
            </div>
            <div className="mt-4">
                <p className="text-white">
                    Already have an account?
                    <Link to="/signin"> 
                    <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
                        Sign in
                    </button>
                    </Link>
                </p>
            </div>

            <div className="w-full" >
                <form onSubmit={onSubmit} className="flex flex-col justify-center items-center w-3/4 mx-auto " autoComplete="off">
                    <div className="my-5 w-1/3 ">
                        <input 
                          autoComplete="off"
                          type="text"
                          placeholder="username"
                          className="px-8 py-3 w-full"
                          name="username"
                          onChange={handleFormChange}
                          value={signupDetails.username}
                         />
                    </div>

                     <div className="my-5 w-1/3 ">
                        <input 
                          autoComplete="off"
                          type="email"
                          placeholder=" email"
                          className="px-8 py-3 w-full "
                           onChange={handleFormChange}
                           name="email"
                           value={signupDetails.email}
                           />
                    </div>

                     <div className="my-5 w-1/3 ">
                        <input 
                          autoComplete="off"
                          type="password"
                          placeholder="password"
                           onChange={handleFormChange}
                          className="px-8 py-3 w-full "
                          name="password"
                          value={signupDetails.password}
                           />
                    </div>

                     <div className="my-5 w-1/3 ">
                        <button className="btn btn-success rounded-md px-2 py-1 w-full hover:bg-green-400 " type="submit">Submit</button>
                    </div>

                    
                </form>

            </div>

        </div>

    )

}