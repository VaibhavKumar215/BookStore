import React from 'react'
import Book from '/book.jpg'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-12 justify-between'>
                <div className="w-full md:w-1/2 md:order-1 order-2">
                    <div className='space-y-10'>
                        <h1 className='text-4xl font-bold'>Hello Welcome here to learn something <span className='text-pink-500'>new everyday!!!</span>
                        </h1>
                        <p className='text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, odio? Blanditiis adipisci dicta, deleniti quam exercitationem fugiat ab qui deserunt dolores, ducimus totam odit magnam eum beatae saepe quasi. Nam.
                        </p>
                        <label className="input input-bordered flex items-center gap-2 dark:text-gray-500  focus-within:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="email" className="grow dark:text-black" placeholder="Email" />
                        </label>
                    </div>
                    <div className='mt-12'>
                        <button className="btn btn-secondary">Secondary</button>
                    </div>
                </div>
                <div className="coverImg w-full md:w-1/2  md:h-1/3 order-1 relative flex items-center justify-center p-1 overflow-hidden md:ml-10 mb-10">
                    <img src={Book} alt="Book Image" className="z-10 shadow-md w-full" />
                </div>
            </div>
        </>
    )
}
export default Header