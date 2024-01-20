 import img1 from "../../../assets/image/coffee-item1.jpg"
 import img2 from "../../../assets/image/coffee-item2.jpg"
 import img3 from "../../../assets/image/coffee-item3.jpg"
 import img4 from "../../../assets/image/coffee-item4.jpg"
 import img5 from "../../../assets/image/coffee-item5.jpg"

const CoffeeItem = () => {
    return (
        <div data-aos="zoom-in-down" className="pt-28 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mx-4">
                 
                <div className=" relative  group overflow-hidden rounded">
                    <img className="w-full h-[560px] opacity-30 hover:opacity-60 duration-1000  cursor-pointer transition ease-in-out delay-150   hover:-translate-y-0 hover:scale-110 " src={img2} alt="" />
                    <h3 className="text-4xl font-bold text-[#fff]   absolute bottom-[40%] hidden group-hover:block duration-700 left-[40%]">Latte</h3>
                </div>
                <div className="relative md:bottom-14   group overflow-hidden rounded">
                    <img className="w-full h-[560px] opacity-30 hover:opacity-60 duration-1000  cursor-pointer transition ease-in-out delay-150   hover:-translate-y-0 hover:scale-110 " src={img3} alt="" />
                    <h2 className="text-4xl font-bold text-[#fff]   absolute bottom-[40%] hidden group-hover:block duration-700 left-[20%]">Cappuccino</h2>
                </div>
                <div className="relative    group overflow-hidden rounded">
                    <img className="w-full h-[560px] opacity-30 hover:opacity-60 duration-1000  cursor-pointer transition ease-in-out delay-150   hover:-translate-y-0 hover:scale-110" src={img4} alt="" />
                    <h2 className="text-4xl font-bold text-[#fff]   absolute bottom-[40%] hidden group-hover:block duration-700 left-[20%]">Iced Coffee</h2>
                </div>
                <div className="relative md:bottom-14   group overflow-hidden rounded">
                    <img className="w-full h-[560px] opacity-30 hover:opacity-60 duration-1000  cursor-pointer transition ease-in-out delay-150   hover:-translate-y-0 hover:scale-110" src={img5} alt="" />
                    <h2 className="text-4xl font-bold text-[#fff]   absolute bottom-[40%] hidden group-hover:block duration-700 left-[40%]"> Coffee</h2>
                </div>
            </div>
        </div>
    );
};

export default CoffeeItem;