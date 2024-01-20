import logo from "../../../assets/image/logo.png"
import { Link, NavLink } from "react-router-dom";
 

const Navbar = () => {
    const navLink = <>
        <li><NavLink to="/" className= "md:text-xl text-lg  uppercase text-white font-semibold hover:text-[#b99272] hover:duration-700 ">Home</NavLink></li>
        <li><NavLink  to="/about" className = "md:text-xl text-lg  uppercase text-white font-semibold hover:text-[#b99272] hover:duration-700">About</NavLink></li>
        <li><NavLink  to="/" className = "md:text-xl text-lg uppercase text-white font-semibold hover:text-[#b99272] hover:duration-700">Menu</NavLink></li>
        <li><NavLink  to="/" className = "md:text-xl text-lg uppercase text-white font-semibold hover:text-[#b99272] hover:duration-700">Blog</NavLink></li>
        <li><NavLink  to="/" className = "lg:text-xl text-lg uppercase text-white font-semibold hover:text-[#b99272] hover:duration-700">Contacts</NavLink></li>
    </>

    return (
        <div>

            <div className="navbar md:h-24 h-[70px] fixed bg-[#0E1317] z-10  md:px-14">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] px-12 pt-6 space-y-3 shadow-md  bg-[#090C0F] rounded-box w-80 h-[320px]">
                            {navLink}
                            <div className="block md:hidden">
                                <a href="#" className="custom-btn btn-14  ">Book a table</a>
                            </div>
                        </ul>
                    </div>
                    <div className="relative md:static md:left-0 left-44">
                        <Link to="/"><img className="w-36" src={logo} alt="" /></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="gap-14  md:relative lg:right-28 md:pr-52  menu-horizontal px-1 ">
                        {navLink}
                    </ul>
                    <div className="navbar-end ">
                        <a href="#" className="custom-btn btn-14 px-4 hidden md:block">Book a table</a>
                    </div> 
                </div>
                {/* <div className="navbar-end ">
                    <a href="#" className="custom-btn btn-14 px-4 hidden md:block">Book a table</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;