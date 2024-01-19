import newsImg1 from "../../../assets/image/coffee-news-img1.jpg"
import newsImg2 from "../../../assets/image/coffee-news-img2.jpg"
import newsImg3 from "../../../assets/image/coffee-news-img3.jpg"
import { FaCalendarAlt, FaComments } from "react-icons/fa";

const CoffeeNews = () => {
    return (
        <div className="bg-[#090C0F] pt-32">
            <div className="text-center space-y-2">
                <p className="text-xl font-medium text-[#b99272]">GET EVERY SINGLE UPDATE</p>
                <h1 className="text-5xl font-bold text-white">Read Some Latest Blog & News</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:mx-32 mt-16">
                {/* first item */}
                <div className="  ">
                    <div>
                        <img className="w-[450px] h-[500px] object-cover opacity-40 " src={newsImg1} alt="" />
                    </div>
                    <div className="relative bottom-36">
                        <div className="px-6 space-y-1">
                            <div>
                                <h2 className="text-3xl text-white font-bold">SWR React Hooks  Next <br /> Increm Ental Static  </h2>
                            </div>
                            <div className="flex gap-8">
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-xl"></FaCalendarAlt>
                                    <h4 className="text-xl">25 Sep 2021</h4>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaComments className="text-xl"></FaComments>
                                    <h4 className="text-xl">Comments (7)</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second item */}
                <div>
                    <div>
                        <img className="w-[450px] h-[500px] object-cover opacity-40 " src={newsImg2} alt="" />
                    </div>
                    <div className="relative bottom-36">
                        <div className="px-6 space-y-1">
                            <div>
                                <h2 className="text-3xl text-white font-bold">Decisions   Building Flexible <br /> Components DevTool </h2>
                            </div>
                            <div className="flex gap-8">
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-xl"></FaCalendarAlt>
                                    <h4 className="text-xl">17 Mar 2018</h4>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaComments className="text-xl"></FaComments>
                                    <h4 className="text-xl">Comments (3)</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* third item */}
                <div>
                    <div>
                        <img className="w-[450px] h-[500px] object-cover opacity-40 " src={newsImg3} alt="" />
                    </div>
                    <div className="relative bottom-36">
                        <div className="px-6 space-y-1">
                            <div>
                                <h2 className="text-3xl text-white font-bold">SWR React Hooks   Next <br /> Increm Ental Static  </h2>
                            </div>
                            <div className="flex gap-8">
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-xl"></FaCalendarAlt>
                                    <h4 className="text-xl">12 Jan 2022</h4>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaComments className="text-xl"></FaComments>
                                    <h4 className="text-xl">Comments (5)</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-center relative bottom-10">
                <a href="#" className="custom-btn btn-14  ">view all</a>
            </div>
        </div>
    );
};

export default CoffeeNews;