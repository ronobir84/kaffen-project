import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const slides = [
        {
            url: "https://i.ibb.co/kmB3qpZ/banner1.jpg",
            text: "hello"
        },
        {
            url: "https://i.ibb.co/Wnv2KPq/banner2.jpg",
        },
        {
            url: "https://i.ibb.co/g3ycmKq/banner3.jpg"
        }
    ]
    return (
        <div   className=" md:min-h-screen   py-16  relative group ">
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="md:w-full  md:min-h-screen  h-[400px] bg-cover duration-700">
                <div className="absolute top-[30%] md:left-[10%] md:space-y-5 ">
                    <p className="md:text-2xl  text-white font-bold uppercase">Welcome to the kaffen</p>
                    <h2 className="text-white md:text-[90px] md:font-extrabold text-5xl font-bold ">The Paris <br /> Coffee  House</h2>
                    <div className="">
                        <a href="#" className="custom-btn btn-14 relative  top-6 ">explore more</a>
                        <a href="#" className="custom-btn btn-15 relative md:left-5 left-4  top-6 ">get delivery</a>

                    </div>
                </div>
            </div>

            {/* left arrow */}
            <div className="   absolute md:top-[50%] top-[80%] -translate-x-0 translate-y-[-50%]   text-2xl    bg-[#FFFFFF] text-[#B99272] hover:text-white hover:bg-[#B99272] md:w-20 md:h-20 w-14 h-14 hover:duration-700 cursor-pointer  rounded-e-full">
                <FaAngleLeft onClick={prevSlide} className="md:text-4xl text-3xl relative md:top-5 top-3 left-3" ></FaAngleLeft>
            </div>

            {/* right arrow */}
            <div className=" absolute md:top-[50%] top-[80%] -translate-x-0 translate-y-[-50%] right-0 text-2xl  bg-[#FFFFFF] text-[#B99272] hover:text-white hover:bg-[#B99272] md:w-20 md:h-20 w-14 h-14 hover:duration-700 cursor-pointer  rounded-s-full">
                <FaAngleRight onClick={nextSlide} className="md:text-4xl text-3xl relative md:top-5 top-3 left-4 md:left-6"></FaAngleRight>
            </div>


            {/* hidden group-hover:block */}
        </div>
    );
};

export default Banner;