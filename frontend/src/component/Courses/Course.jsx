import React from 'react'
import Cards from '../Utility/cards'
import Books from '../../../public/books.json'
import { Link } from 'react-router-dom'

const Course = () => {
    return (
        <>
            <div className={'max-w-screen-2xl container mx-auto md:px-1 px-2'}>
                <div className='mt-20 text-center '>
                    <h1 className='text-2xl md:text-4xl'>We are delighted to have you{" "}
                        <span className='text-pink-500'>Here ! :)</span></h1>
                    <p className='mt-12'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquid ipsam modi commodi expedita accusantium laborum, rerum illo sed? Sint, fuga ullam est deleniti, nisi sequi corporis nemo commodi molestiae deserunt officiis. Alias, unde! Earum cum necessitatibus quae asperiores enim, vero eligendi similique, ratione provident dolorum consectetur qui repellat quidem.
                    </p>
                    <Link to="/">
                        <button className='mt-6 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>
                {/* <div className="dropdown dropdown-bottom flex justify-end mt-12 ">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div> */}
                <div className='mt-14 flex flex-wrap gap-5 justify-center'>
                    {Books.map((items) => {
                        return <Cards key={items.id} item={items} />
                    })}
                </div>
            </div >
        </>
    )
}

export default Course