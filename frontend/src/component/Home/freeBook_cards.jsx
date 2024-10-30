import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../Utility/cards';
import  "./freeBook_cards.css"




const freeBook_cards = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <div className="slick-next"></div>,
        prevArrow: <div className="slick-prev"></div>,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [booksData, setbooksData] = useState([])

    useEffect(() => {
        async function getBook(){
            try {
                const res = await axios.get('http://localhost:3001/Book')
                setbooksData(res.data.filter((e) => e.category === "Free"))
            } catch (error) {
                console.log("Error in fething the data",error)
            }
        }
        getBook()
    }, [])
    

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <div>
                    <h1 className='text-xl font-semibold mb-5'>Free Offered Books</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus soluta est necessitatibus. A placeat dignissimos vel quas, nam esse officia voluptate amet, dolore, praesentium sequi consequuntur quis recusandae quia.</p>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {booksData.map((items) => {
                            return <Cards item={items} key={items.id} />
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default freeBook_cards