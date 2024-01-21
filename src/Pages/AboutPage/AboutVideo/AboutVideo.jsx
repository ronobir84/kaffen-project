 import img1 from "../../../assets/about-page-img/about-food-img1.png"
 import img2 from "../../../assets/about-page-img/about-food-img2.png"
 import img3 from "../../../assets/about-page-img/about-food-img3.png"
 import img4 from "../../../assets/about-page-img/about-food-img4.png"

const AboutVideo = () => {
    return (
        <div className=" md:px-32 bg-[#0E1317] py-24 ">
            <div>
                <iframe className="w-full min-h-screen rounded" src="https://www.youtube.com/embed/Gu6z6kIukgg" title="Lumion 9 Release Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="bg-[#090C0F] mt-16 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 px-20">

                    {/* first */}
                    <div className="space-y-5">
                        <div className=" bg-[#0E1317]  w-36 h-36 p-8 relative left-7  duration-1000 rounded-full">
                            <img className="" src={img1} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold text-white">Birthday Cakes</h2>
                            <p className="text-xl font-medium text-gray-400">Sed ut perspiciatis unde</p>
                        </div>
                    </div>

                    {/* second */}
                    <div className="space-y-5">
                        <div className=" bg-[#0E1317] w-36 h-36  pt-9 px-6 relative left-7  duration-1000 rounded-full">
                            <img className="" src={img2} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold text-white">Fresh Foods</h2>
                            <p className="text-xl font-medium text-gray-400">Sed ut perspiciatis unde</p>
                        </div>
                    </div>

                    {/* third  */}
                    <div className="space-y-5">
                        <div className=" bg-[#0E1317]  w-36 h-36 pt-9 px-7 relative left-7  duration-1000 rounded-full">
                            <img className="" src={img3} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold text-white">Skills Chefs</h2>
                            <p className="text-xl font-medium text-gray-400">Sed ut perspiciatis unde</p>
                        </div>
                    </div>
                    {/* four  */}
                    <div className="space-y-5">
                        <div className=" bg-[#0E1317] w-36 h-36 pl-12 pt-6 relative left-7  duration-1000 rounded-full">
                            <img className="w-14" src={img4} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold text-white">Organic Juice</h2>
                            <p className="text-xl font-medium text-gray-400">Sed ut perspiciatis unde</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default AboutVideo;