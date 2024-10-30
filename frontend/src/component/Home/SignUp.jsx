import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [redirect, setRedirect] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        };

        try {
            const res = await axios.post("http://localhost:3001/Users/signUp", userInfo);
            if (res.data) {
                toast.success('SignUp Successfully');
                localStorage.setItem("UserId", JSON.stringify(res.data));
                setRedirect(true);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Signup failed");
        }
    };

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="modal-box dark:bg-slate-400">
                    <form method="post" onSubmit={handleSubmit(onSubmit)}>
                        <Link to="/">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </Link>
                        <div className='space-y-5'>
                            <h3 className="font-semibold text-xl">SignUp</h3>
                            <div>
                                <label htmlFor="signUpname">Name</label>
                                <input type="text" id="signUpname" {...register("name", { required: true })} className='w-full border-2 px-2 py-1 mt-2 outline-none dark:text-black' placeholder='Enter your full name' />
                                {errors.name && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            <div>
                                <label htmlFor="signUpemail">Email</label>
                                <input type="email" id="signUpemail" {...register("email", { required: true })} className='w-full border-2 px-2 py-1 mt-2 outline-none dark:text-black' placeholder='Enter your email' />
                                {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            <div>
                                <label htmlFor="signUppassword">Password</label>
                                <input type="password" id="signUppassword" {...register("password", { required: true })} className='w-full border-2 px-2 py-1 mt-2 outline-none dark:text-black' placeholder='Enter your password' />
                                {errors.password && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around items-center'>
                                <button className='bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-600'>SignUp</button>
                                <p className='font-semibold'>Already have an account?{" "}
                                    <span className='text-blue-500 underline cursor-pointer' onClick={() => document.getElementById('my_modal_3').showModal()}>Login</span>
                                </p>
                                <Login />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;
