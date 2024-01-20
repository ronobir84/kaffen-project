import menuIng1 from "../../../assets/image/about-menu1.jpg"
import menuIng2 from "../../../assets/image/about-menu2.jpg"
import menuIng3 from "../../../assets/image/about-menu-3.jpg"
import { MdRestaurant } from "react-icons/md";
import { LiaCoffeeSolid } from "react-icons/lia";
import { IoFastFoodSharp } from "react-icons/io5";
const AboutMenu = () => {
    return (
        <div data-aos="fade-down-right">
            <div className="grid grid-cols-1 md:grid-cols-3 md:mx-32 mt-10 md:space-y-0 space-y-8 md:p-0 p-4">
                <div className="brightness-50  transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-100   duration-500">
                    <div className="">
                        <img className="w-[450px] h-80 opacity-50 rounded-md" src={menuIng1} alt="" />
                    </div>
                    <div className="md:w-[350px] w-[300px] border h-[270px]  absolute top-7 md:left-12 left-[38px] rounded-md cursor-pointer ">
                        <div className="text-center relative md:top-[30%] top-[25%] space-y-2">
                            <MdRestaurant className="text-[100px] text-white font-extrabold   relative left-[35%]"></MdRestaurant>
                            <h2 className="text-3xl text-white  font-bold">Restaurant Menu</h2>
                        </div>

                    </div>
                </div>




                <div className="brightness-50   transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-100   duration-500">
                    <div className="">
                        <img className="w-[450px] h-80 opacity-50 rounded-md" src={menuIng2} alt="" />
                    </div>
                    <div className="md:w-[350px] w-[300px] border h-[270px] absolute top-7 md:left-12 left-[38px] rounded-md cursor-pointer ">
                        <div className="text-center relative md:top-[30%] top-[25%] space-y-2">
                            <LiaCoffeeSolid className="text-[100px] text-white font-extrabold   relative left-[35%]"></LiaCoffeeSolid>
                            <h2 className="text-3xl text-white font-bold">Restaurant Menu</h2>
                        </div>

                    </div>
                </div>
                <div className="brightness-50   transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-100   duration-500">
                    <div className="">
                        <img className="w-[450px] h-80 opacity-50 rounded-md" src={menuIng3} alt="" />
                    </div>
                    <div className="md:w-[350px] w-[300px] border h-[270px] absolute top-7 md:left-12 left-[38px] rounded-md cursor-pointer ">
                        <div className="text-center relative md:top-[30%] top-[25%] space-y-2">
                            <IoFastFoodSharp className="text-[100px] text-white font-extrabold   relative left-[35%]"></IoFastFoodSharp>
                            <h2 className="text-3xl text-white font-bold">Restaurant Menu</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMenu;