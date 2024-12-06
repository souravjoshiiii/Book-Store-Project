import React from 'react'
import list from "../assets/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './cards';

function Freebook() {
    const filterdata = list.filter((data) => data.category === "free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
  return (<>
    <div className="max-w-screen-2x1 container mx-auto md:px-17 px-4 ">
        <div className="dark:bg-slate-900 dark:text-white">
     <h1 className="text-xl font-semibold pb-2">Free offered courses
        </h1>
        <p>These are the list of all the free books provided for the student welfare by our university.You can study all your academic books here at no cost.</p> 
    </div>
    <div>   <Slider {...settings}>
            {filterdata.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider></div>
      </div>
    </>
  )
}

export default Freebook
