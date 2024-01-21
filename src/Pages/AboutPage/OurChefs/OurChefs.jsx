
import { Link } from "react-router-dom";
import ChefsImage1 from "../../../assets/about-page-img/Chefs-image1.jpg"
import ChefsImage2 from "../../../assets/about-page-img/Chefs-image2.jpg"
import ChefsImage3 from "../../../assets/about-page-img/Chefs-image3.jpg"
import ChefsImage4 from "../../../assets/about-page-img/Chefs-image4.jpg"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
const OurChefs = () => {
    return (
        <div className="bg-[#090C0F] py-28">
            <div className="text-center">
                <p className="text-xl font-medium text-[#b99272]">EXPERIENCE TEAM MEMBER</p>
                <h1 className="text-5xl font-bold text-white">Meet Our Professional Chefs</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 md:px-32 pt-16">

                {/* first card */}
                <div className="w-80 h-96 bg-[#0E1317]  ml-8">
                    <div className="text-center pt-8">
                        <h2 className="text-2xl text-white font-semibold">Anthony J. Bowman</h2>
                        <p className="text-xl font-medium text-[#b99272]">Senior Chefs</p>
                    </div>
                    <div className="group">
                        <div className="mx-6 relative top-7 opacity-85 hover:opacity-40 duration-700 overflow-hidden rounded-md">
                            <img className="cursor-pointer transition ease-in-out delay-150   hover:-translate-y-0 hover:scale-110 duration-700 " src={ChefsImage1} alt="" />
                        </div>
                        <div className="  relative mx-auto w-fit bottom-56 hidden group-hover:block duration-1000">
                            <h3 className="text-xl font-medium text-white">bowmankf@gmail.com</h3>
                            <p className="text-xl font-medium text-white">+012 (345) 678 99</p>
                        </div>
                        <div className="relative bottom-28 hidden group-hover:block     duration-1000 ">
                            <div className="flex gap-2 justify-center">
                                <Link><FaFacebookF className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaFacebookF></Link>

                                <Link><FaTwitter className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaTwitter></Link>

                                <Link><FaLinkedinIn className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaLinkedinIn></Link>

                                <Link><FaYoutube className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaYoutube></Link>
                            </div>
                             

                        </div>
                    </div>
                    

                </div>

                {/* second card */}
                <div className="w-80 h-96 bg-[#0E1317] ml-8">
                    <div className="text-center pt-8">
                        <h2 className="text-2xl text-white font-semibold">Kenny V. Gonzalez</h2>
                        <p className="text-xl font-medium text-[#b99272]">Senior Chefs</p>
                    </div>
                    <div className="group">
                        <div className="mx-6 relative top-7 opacity-85 hover:opacity-40 duration-700 overflow-hidden rounded-md">
                            <img className="cursor-pointer transition ease-in-out delay-150   hover:-translate-y-0 hover:scale-110 duration-700 " src={ChefsImage2} alt="" />
                        </div>
                        <div className="  relative mx-auto w-fit bottom-56 hidden group-hover:block duration-1000">
                            <h3 className="text-xl font-medium text-white">gonzalezkf@gmail.com</h3>
                            <p className="text-xl font-medium text-white">+012 (345) 678 99</p>
                        </div>
                        <div className="relative bottom-28 hidden group-hover:block     duration-1000 ">
                            <div className="flex gap-2 justify-center">
                                <Link><FaFacebookF className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaFacebookF></Link>

                                <Link><FaTwitter className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaTwitter></Link>

                                <Link><FaLinkedinIn className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaLinkedinIn></Link>

                                <Link><FaYoutube className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaYoutube></Link>
                            </div>


                        </div>
                    </div>


                </div>

                {/* third card */}
                <div className="w-80 h-96 bg-[#0E1317] ml-8">
                    <div className="text-center pt-8">
                        <h2 className="text-2xl text-white font-semibold">Joseph M. Lawrence</h2>
                        <p className="text-xl font-medium text-[#b99272]">Senior Chefs</p>
                    </div>
                    <div className="group">
                        <div className="mx-6 relative top-7 opacity-85 hover:opacity-40 duration-700 overflow-hidden rounded-md">
                            <img className="cursor-pointer transition ease-in-out delay-150   hover:-translate-y-0 hover:scale-110 duration-700 " src={ChefsImage3} alt="" />
                        </div>
                        <div className="  relative mx-auto w-fit bottom-56 hidden group-hover:block duration-1000">
                            <h3 className="text-xl font-medium text-white">lawrencekf@gmail.com</h3>
                            <p className="text-xl font-medium text-white">+012 (345) 678 99</p>
                        </div>
                        <div className="relative bottom-28 hidden group-hover:block     duration-1000 ">
                            <div className="flex gap-2 justify-center">
                                <Link><FaFacebookF className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaFacebookF></Link>

                                <Link><FaTwitter className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaTwitter></Link>

                                <Link><FaLinkedinIn className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaLinkedinIn></Link>

                                <Link><FaYoutube className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaYoutube></Link>
                            </div>


                        </div>
                    </div>


                </div>
                
                {/* Four card */}
                <div className="w-80 h-96 bg-[#0E1317] ml-8">
                    <div className="text-center pt-8">
                        <h2 className="text-2xl text-white font-semibold">Charles K. Smith</h2>
                        <p className="text-xl font-medium text-[#b99272]">Senior Chefs</p>
                    </div>
                    <div className="group">
                        <div className="mx-6 relative top-7 opacity-85 hover:opacity-40 duration-700 overflow-hidden rounded-md">
                            <img className="cursor-pointer transition ease-in-out delay-150   hover:-translate-y-0 hover:scale-110 duration-700 " src={ChefsImage4} alt="" />
                        </div>
                        <div className="  relative mx-auto w-fit bottom-56 hidden group-hover:block duration-1000">
                            <h3 className="text-xl font-medium text-white">smithkf@gmail.com</h3>
                            <p className="text-xl font-medium text-white">+012 (345) 678 99</p>
                        </div>
                        <div className="relative bottom-28 hidden group-hover:block     duration-1000 ">
                            <div className="flex gap-2 justify-center">
                                <Link><FaFacebookF className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaFacebookF></Link>

                                <Link><FaTwitter className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaTwitter></Link>

                                <Link><FaLinkedinIn className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaLinkedinIn></Link>

                                <Link><FaYoutube className="text-5xl rounded-lg p-3 hover:bg-[#b99272] hover:text-white duration-1000 text-[#b99272] bg-[#ffff]"></FaYoutube></Link>
                            </div>


                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default OurChefs;