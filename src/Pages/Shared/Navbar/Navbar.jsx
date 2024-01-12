import { BiTimeFive } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="flex justify-between px-10 bg-[#090C0F] h-14">
            <div className="flex items-center gap-2">
                <BiTimeFive className="text-[#b99272] text-2xl"></BiTimeFive>
                <h2> <span className="text-[#b99272] text-lg">OPENING HOURS : </span><span className="text-[#ced2d5] text-lg font-semibold">08:00 AM - 09:00 PM</span></h2>
            </div>
            <div className="flex items-center gap-5">
                <Link to="/"><FaFacebookF className="text-2xl text-[#ced2d5]"></FaFacebookF></Link>
                <Link to="/"><FaTwitter className="text-2xl text-[#ced2d5]"></FaTwitter></Link>
                <Link to="/"><FaInstagram className="text-2xl text-[#ced2d5]"></FaInstagram></Link>
                <Link to="/"><FaYoutube className="text-2xl text-[#ced2d5]"></FaYoutube></Link>
            </div>
            <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-2xl text-[#b99272] "></FaMapMarkerAlt>
                <h2> <span className="text-[#b99272] text-lg">LOCATION :</span> <span className="text-lg font-semibold text-[#ced2d5]">55 MAIN STREET, NEW YORK</span></h2>
            </div>
        </div>
    );
};

export default Navbar;