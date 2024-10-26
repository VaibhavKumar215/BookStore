import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div className="h-screen flex justify-center items-center">
                <div className="modal-box dark:bg-slate-400">
                    <form method="post" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </Link>
                        <div className='space-y-5'>
                            <h3 className="font-semibold text-xl">SignUp</h3>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" {...register("name", { required: true })} className='w-full border-2 px-2 py-1 mt-2 outline-none' placeholder='Enter your full name' />
                                {errors.name && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            {/* Email */}
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" {...register("email", { required: true })} className='w-full border-2 px-2 py-1 mt-2 outline-none' placeholder='Enter your email' />
                                {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            {/* Password */}
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" {...register("password", { required: true })} className='w-full border-2 px-2 py-1 mt-2 outline-none' placeholder='Enter your password' />
                                {errors.password && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around items-center'>
                                <button className='bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-600 '>SignUp</button>
                                <p className='font-semibold'>Already have an account?{" "}<span className='text-blue-500 underline cursor-pointer' onClick={() => document.getElementById('my_modal_3').showModal()}>Login</span></p>
                                <Login />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp