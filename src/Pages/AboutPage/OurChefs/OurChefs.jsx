
import ChefsImage1 from "../../../assets/about-page-img/Chefs-image1.jpg"
import ChefsImage2 from "../../../assets/about-page-img/Chefs-image2.jpg"
import ChefsImage3 from "../../../assets/about-page-img/Chefs-image3.jpg"
import ChefsImage4 from "../../../assets/about-page-img/Chefs-image4.jpg"
import { FaFacebookF } from "react-icons/fa";
const OurChefs = () => {
    return (
        <div className="bg-[#090C0F] py-20">
            <div className="text-center">
                <p className="text-xl font-medium text-[#b99272]">EXPERIENCE TEAM MEMBER</p>
                <h1 className="text-5xl font-bold text-white">Meet Our Professional Chefs</h1>
            </div>
            <div>
                <div className="w-80 h-96 bg-[#0E1317] ml-8">
                    <div className="text-center pt-8">
                        <h2 className="text-2xl text-white font-semibold">Anthony J. Bowman</h2>
                        <p className="text-xl font-medium text-[#b99272]">Senior Chefs</p>
                    </div>
                    <div>
                        <div className="mx-6 relative top-7 opacity-40 hover:opacity-80 duration-700">
                            <img src={ChefsImage1} alt="" />
                        </div>
                        <div className="  relative mx-auto w-fit bottom-56">
                            <h3 className="text-xl font-medium text-white">bowmankf@gmail.com</h3>
                            <p className="text-xl font-medium text-white">+012 (345) 678 99</p>
                        </div>
                        <div>

                        </div>
                    </div>
                    

                </div>
            </div>

        </div>
    );
};

export default OurChefs;