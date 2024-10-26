import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-400">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>                        
                        </Link>
                        <div className='space-y-5'>
                            <h3 className="font-semibold text-xl">Login</h3>
                            {/* Email */}
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" {...register("email", { required: true })} className='w-full border-2 px-2 py-1 mt-2 outline-none' placeholder='Enter your email' />
                                {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            {/* Password */}
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" id='password' {...register("password", { required: true })}className='w-full border-2 px-2 py-1 mt-2 outline-none' placeholder='Enter your password' />
                                {errors.password && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around items-center'>
                                <button className='bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-600 '>Login</button>
                                <p className='font-semibold'>Not registered?{" "}<Link to="/SignUp" className='text-blue-500 underline'>SignUp</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Login