import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            email:data.email,
            password:data.password
        }
        await axios.post("http://localhost:3001/Users/Login",userInfo)
        .then((res)=>{
            if(res.data){
                document.getElementById('my_modal_3').close()
                toast.success('Login Successfully');
                setTimeout(() => {
                    window.location.reload()
                },2000);
            }
            localStorage.setItem("UserId",JSON.stringify(res.data))
        })
        .catch((error)=>{
            toast.error(error.response.data.message);
            document.getElementById('my_modal_3').close()
            setTimeout(() => {
                window.location.reload()
            },2000);
        })
    };
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-transparent dark:backdrop-blur-lg">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none"
                        onClick={() => document.getElementById('my_modal_3').close()}>✕                      
                        </button>
                        <div className='space-y-5'>
                            <h3 className="font-semibold text-xl dark:text-teal-500">Login</h3>
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className='dark:text-amber-100'>Email</label>
                                <input type="email" id="Login_email" {...register("email", { required: true })} className='w-full border-2 px-2 py-1 mt-2 outline-none dark:text-black' placeholder='Enter your email' />
                                {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            {/* Password */}
                            <div>
                                <label htmlFor="password" className='dark:text-amber-100'>Password</label>
                                <input type="password" id='Login_password' {...register("password", { required: true })}className='w-full border-2 px-2 py-1 mt-2 outline-none dark:text-black' placeholder='Enter your password' />
                                {errors.password && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around items-center'>
                                <button className='bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-600'>Login</button>
                                <p className='font-semibold'>Not registered?{" "}<Link to="/SignUp" className='text-blue-400 underline'>SignUp</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Login