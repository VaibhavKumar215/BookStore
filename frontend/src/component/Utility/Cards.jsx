import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div className="card bg-base-100 md:w-60 md:h-[24rem] justify-center shadow-xl my-10 mx-5 hover:scale-110 duration-300 dark:bg-slate-400 dark:border">
                <figure >
                    <img
                        src={item.image}
                        alt=""
                        loading='lazy'
                    />
                </figure>

                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline p-3 cursor-pointer">${item.price}</div>
                        <div className="badge badge-outline bg-pink-500  hover:bg-pink-600 text-white p-3 rounded-full border-[1px] duration-200 cursor-pointer">Buy Now</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards