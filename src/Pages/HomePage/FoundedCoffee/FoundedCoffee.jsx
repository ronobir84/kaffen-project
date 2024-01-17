import FoundedImg from "../../../assets/image/Founded-man-img.jpg"
import FoundedCoffee1 from "../../../assets/image/Founded-img-1.png"
import FoundedCoffee2 from "../../../assets/image/Founded-img-2.png"
const FoundedCoffee = () => {
    return (
        <div className="mt-20 md:mx-32">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                    <img className="rounded " src={FoundedImg} alt="" />
                </div>
                <div>
                    <p className="text-xl text-[#B99272] font-medium">WHY CHOOSE US</p>
                    <h2 className="text-4xl text-white font-bold mt-6">New London Coffee Founded For Extraordinary Test</h2>
                    <p className="text-xl mt-8">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis</p>
                    <div className="flex items-center gap-7 mt-8">
                        <div>
                            <img className="w-24 h-24" src={FoundedCoffee1} alt="" />
                        </div>
                        <div className="mt-6 space-y-2">
                            <h1 className="text-3xl text-white font-bold">Natural Coffee Beans</h1>
                            <p className="text-xl">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                        </div>
                    </div>
                    <div className="flex gap-7 items-center mt-8">
                        <div>
                            <img className="w-24 h-24" src={FoundedCoffee2} alt="" />
                        </div>
                        <div className="mt-6 space-y-2">
                            <h1 className="text-3xl text-white font-bold">100% ISO Certification</h1>
                            <p className="text-xl">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <a href="#" className="custom-btn btn-14  ">explore more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoundedCoffee;