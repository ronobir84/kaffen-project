import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo.png"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { initLightboxJS } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox } from 'lightbox.js-react'
import { useEffect } from "react";
import img1 from "../../../assets/image/coffee-item1.jpg"
import img2 from "../../../assets/image/coffee-item2.jpg"
import img3 from "../../../assets/image/coffee-item3.jpg"
import img4 from "../../../assets/image/coffee-item4.jpg"
import img5 from "../../../assets/image/coffee-item5.jpg"
 

const Footer = () => {
    useEffect(() => {
        initLightboxJS("Insert your License Key here", "Insert plan type here");
    }, []);
    return (
        <div className="mt-20 md:px-20">
            
            <footer className="footer p-10 md:h-96 md:min-h-0 min-h-screen bg-[#090C0F] ">
                <div>
                    <Link><img className="w-36" src={logo} alt="" /></Link>
                </div>
                <nav>
                    <h1 className=" text-3xl font-bold text-white">Working Hours</h1>
                    <div className="space-y-2 pt-2">
                        <h2 className="text-2xl text-white font-normal">Sunday - Thursday</h2>
                        <p className="text-lg text-[#b99272]">08:00 am - 09:00pm</p>
                    </div>
                    <div className="space-y-2 pt-2">
                        <h1 className="text-xl text-white font-normal">Only Friday</h1>
                        <p className="text-lg text-[#b99272]">03:00 pm - 09:00pm</p>
                    </div>
                    <div>
                        <h1 id="style-font" className="text-2xl font-semibold text-[#ff8a00]">Saturday Close</h1>
                    </div>
                </nav>
                <nav>
                    <h1 className="text-3xl font-bold text-white">Company</h1>
                    <div className="flex gap-3 pt-2">
                        <div>
                            <IoLocationOutline className="text-5xl text-[#b99272]"></IoLocationOutline>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[#b99272]">Location :</h2>
                            <p className="text-lg text-white">55 Main Street, New York</p>
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <div>
                            <MdOutlineEmail className="text-5xl text-[#b99272]"></MdOutlineEmail>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[#b99272]">Email Address :</h2>
                            <p className="text-lg text-white">kaffendev@gmail.com</p>
                        </div>
                    </div>
                     
                    <div className="flex gap-3 pt-4">
                        <div>
                            <FaPhoneAlt className="text-5xl text-[#b99272]"></FaPhoneAlt>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[#b99272]">Phone Number :</h2>
                            <p className="text-lg text-white">+012 (345) 678 99</p>
                        </div>
                    </div>
                </nav>
                <nav className="">
                    <h1 className="text-3xl font-bold text-white">Gallery</h1>
                    <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
                        <img className="w-24 h-24 bg-cover   " src={img1} />
                        <img className="w-24 h-24 bg-cover" src={img2} />
                        <img className="w-24 h-24 bg-cover " src={img3} />
                        <img className="w-24 h-24 bg-cover " src={img4} /> 
                        <img className="w-24 h-24 bg-cover" src={img5} /> 
                        <img className="w-24 h-24 bg-cover " src= {img1} /> 
                    </SlideshowLightbox> 
                </nav>
            </footer>
        </div>
    );
};

export default Footer;