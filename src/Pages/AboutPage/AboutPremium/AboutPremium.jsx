import { FaSketch, FaUserTie, FaSmile } from "react-icons/fa";
import { LiaTrophySolid } from "react-icons/lia";


const AboutPremium = () => {
    return (
        <div className="mt-16 bg-[#090C0F] py-20 ">
            <div className="grid grid-cols-1 md:grid-cols-4 md:px-32 md:space-y-0 space-y-10">
                {/* first */}
                <div className="space-y-4  md:text-justify text-center">
                    
                        <FaSketch className="text-[80px] md:mx-0 mx-auto  p-3  text-[#b99272] bg-[#0E1317] rounded"></FaSketch>
                        <h1 className="text-6xl  font-medium text-[#b99272]">256+</h1>
                        <h3 className="text-2xl text-white font-semibold">Premium Clients</h3>
                        <p className="text-xl text-gray-400">Sed ut perspiciatis unde</p>
                </div>
                {/* second */}
                <div className="space-y-4 md:text-justify text-center">
                    <FaUserTie className="text-[80px] md:mx-0 mx-auto  p-3  text-[#b99272] bg-[#0E1317] rounded"></FaUserTie>

                    <h1 className="text-6xl   font-medium text-[#b99272]">36+</h1>
                    <h3 className="text-2xl text-white font-semibold">Professional Chefs</h3>
                    <p className="text-xl text-gray-400">Sed ut perspiciatis unde</p>
                </div>
                {/* third */}
                <div className="space-y-4 md:text-justify text-center">
                    <LiaTrophySolid className="text-[80px] md:mx-0 mx-auto p-3  text-[#b99272] bg-[#0E1317] rounded"></LiaTrophySolid>

                    <h1 className="text-6xl  font-medium text-[#b99272]">753+</h1>
                    <h3 className="text-2xl text-white font-semibold">Winning Awards</h3>
                    <p className="text-xl text-gray-400">Sed ut perspiciatis unde</p>
                </div>
                {/* four */}
                <div className="space-y-4 md:text-justify text-center">
                    <FaSmile className="text-[80px] md:mx-0 mx-auto p-3  text-[#b99272] bg-[#0E1317] rounded"></FaSmile>

                    <h1 className="text-6xl  font-medium text-[#b99272]">100+</h1>
                    <h3 className="text-2xl text-white font-semibold">5 Star Reviews</h3>
                    <p className="text-xl text-gray-400">Sed ut perspiciatis unde</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPremium;