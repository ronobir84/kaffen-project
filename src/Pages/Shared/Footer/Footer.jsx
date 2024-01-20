import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo.png"
const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer p-10 h-96 bg-[#090C0F] ">
                <div>
                    <img className="w-36" src={logo} alt="" />
                </div>
                <nav>
                    <h1 className=" text-3xl font-bold text-white">Working Hours</h1>
                    <a className="link link-hover ">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h1 className="text-3xl font-bold text-white">Company</h1>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h1 className="text-3xl font-bold text-white">Gallery</h1>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;