import img1 from "../../../assets/image/coffee-menu1.jpg"
import img2 from "../../../assets/image/coffee-menu2.jpg"
import img3 from "../../../assets/image/coffee=menu3.jpg"
import img4 from "../../../assets/image/coffee-menu4.jpg"
import img5 from "../../../assets/image/coffee-menu5.jpg"
import img6 from "../../../assets/image/coffee-menu6.jpg"

const CoffeeMenu = () => {
    return (
        <div id="main-background" className="mt-16 py-36">
            <div>
                <div className="text-center space-y-2  ">
                    <p className="text-xl font-medium text-[#B99272]">CHOOSE BEST COFFEE</p>
                    <h2 className="text-5xl font-bold text-white">Kaffen Popular Coffee Menu</h2>
                </div>
                <div  className="md:mx-32 mt-16">
                    <div id="menu-back" className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#090C0F] py-16 md:px-20 ">


                        {/* fist coffee card */}
                        <div className="flex items-center gap-10">
                            <div>
                                <img className="w-56 md:h-52 h-48 rounded-lg" src={img1} alt="" />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-2xl font-bold text-white">Americano Coffee</h1>
                                <p className="text-xl font-medium">2/3 espresso, 1/3 streamed milk</p>
                                <span className="text-3xl font-bold text-[#B99272]">................ $4.9</span>
                            </div>
                        </div>


                        {/* second coffee card */}
                        <div className="flex items-center gap-10">
                            <div>
                                <img className="w-56 md:h-52 h-52 rounded-lg" src={img2} alt="" />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-2xl font-bold text-white">Espresso Coffee</h1>
                                <p className="text-xl font-medium">2/3 espresso, 1/3 streamed milk</p>
                                <span className="text-3xl font-bold text-[#B99272]">................ $4.9</span>
                            </div>
                        </div>

                        {/* third coffee card */}
                        <div className="flex items-center gap-10">
                            <div>
                                <img className="w-56 md:h-52 h-48 rounded-lg" src={img3} alt="" />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-2xl font-bold text-white">Barista Pouring Syrup</h1>
                                <p className="text-xl font-medium">2/3 espresso, 1/3 streamed milk</p>
                                <span className="text-3xl font-bold text-[#B99272]">................ $3.5</span>
                            </div>
                        </div>


                        {/* four coffee card */}
                        <div className="flex items-center gap-10">
                            <div>
                                <img className="w-56 md:h-52 h-48 rounded-lg" src={img4} alt="" />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-2xl font-bold text-white">Cold - Coffee</h1>
                                <p className="text-xl font-medium">2/3 espresso, 1/3 streamed milk</p>
                                <span className="text-3xl font-bold text-[#B99272]">................ $6.0</span>
                            </div>
                        </div>

                        {/* five coffee card */}
                        <div className="flex items-center gap-10">
                            <div>
                                <img className="w-56 md:h-52 h-48 rounded-lg" src={img5} alt="" />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-2xl font-bold text-white">Cappuccino Arabica</h1>
                                <p className="text-xl font-medium">2/3 espresso, 1/3 streamed milk</p>
                                <span className="text-3xl font-bold text-[#B99272]">................ $2.8</span>
                            </div>
                        </div>

                        {/* six coffee card */}
                        <div className="flex items-center gap-10">
                            <div>
                                <img className="w-56 md:h-52 h-48 rounded-lg" src={img6} alt="" />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-2xl font-bold text-white">Milk Cream Coffee</h1>
                                <p className="text-xl font-medium">2/3 espresso, 1/3 streamed milk</p>
                                <span className="text-3xl font-bold text-[#B99272]">................ $7.5</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoffeeMenu;