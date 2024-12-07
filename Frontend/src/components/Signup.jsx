import React from 'react';
import { Link,useLocation,useNavigate, Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data) =>{const userInfo={
      fullname:data.name,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4008/user/signup",userInfo).then((res)=>{
      if(res.data){toast.success("Sign up successfull");
        navigate(from, { replace: true });
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch(errors)
    {
      console.log(errors);
      toast.error(errors.response.data.message);
    }
  };
  

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {/* Modal */}
      <div id="my_modal_3" className="modal modal-open"> {/* Ensure the modal is visible */}
        <div className="modal-box">
          <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
         
          <h3 className="font-bold text-lg">Signup</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              className="w-80 px-3 py-1 border rounded-md outline-none"
              type="name"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />
             <br />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              className="w-80 px-3 py-1 border rounded-md outline-none"
              type="email"
              placeholder="Enter your e-mail"
              {...register("email", { required: true })}
            />
             <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              className="w-80 px-3 py-1 border rounded-md outline-none"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
             <br />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="mt-6">
            <button className="btn btn-secondary mr-[100px]">Signup</button>
            <span className="mt-10">
              Already have an account?{' '}
              <Link to="/" className="underline text-blue-500 cursor-pointer">
                Log in
              </Link>
            </span>
        
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
