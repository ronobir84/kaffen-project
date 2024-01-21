import KitchenImage1 from "../../../assets/about-page-img/KitchenImage1.png"
import KitchenImage3 from "../../../assets/about-page-img/KitchenImage3.png"
import KitchenImage4 from "../../../assets/about-page-img/KitchenImage4.png"
import KitchenImage5 from "../../../assets/about-page-img/KitchenImage5.png"
import KitchenImage6 from "../../../assets/about-page-img/KitchenImage6.png"
const KitchenItem = () => {
    return (
        <div className="bg-[#0E1317] py-14">
            <div data-aos="fade-down-right" className="grid grid-cols-1 md:grid-cols-5 px-32 md:space-y-0 space-y-10">
                <img className="w-48 opacity-30 hover:opacity-80 duration-700 cursor-pointer" src={KitchenImage1} alt="" />
                 <img className="w-36 opacity-30 hover:opacity-80 duration-700 cursor-pointer" src={KitchenImage3} alt="" />
                <img className="w-36 opacity-30 hover:opacity-80 duration-700 cursor-pointer" src={KitchenImage4} alt="" />
                <img className="w-36 opacity-30 hover:opacity-80 duration-700 cursor-pointer" src={KitchenImage5} alt="" />
                <img className="w-36 opacity-30 hover:opacity-80 duration-700 cursor-pointer" src={KitchenImage6} alt="" />
            </div>
        </div>
    );
};

export default KitchenItem;