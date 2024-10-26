import React from 'react'
import { useForm } from "react-hook-form";

const Contacts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div className="p-6 flex justify-center">
                <div className="shadow-2xl p-5 rounded-md w-96 dark:bg-slate-500">
                    <form method="post" onSubmit={handleSubmit(onSubmit)}>
                        <div className='space-y-5'>
                            <h3 className="font-semibold text-xl">Contact</h3>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" {...register("name", { required: true })} className='w-full border-2 px-2 py-1 mt-2 outline-none' placeholder='Enter your fullname' />
                                {errors.name && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            {/* Email */}
                            <div>
                                <label htmlFor="Cont_email">Email</label>
                                <input type="email" id="Cont_email" {...register("email", { required: true })} className='w-full border-2 px-2 py-1 mt-2 outline-none' placeholder='Enter your email' />
                                {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            {/* Password */}
                            <div>
                                <label htmlFor="Cont_password">Message</label>
                                <textarea type="password" id="Cont_password" {...register("password", { required: true })} className='w-full border-2 px-2 py-1 mt-2 outline-none h-20' placeholder='Enter your message'/>
                                {errors.password && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                            <div>
                                <button className='bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-blue-600 '>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contacts