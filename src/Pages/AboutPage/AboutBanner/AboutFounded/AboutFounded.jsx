import FoundedImg1 from "../../../../assets/about-page-img/Founded-img1.png"
import FoundedImg2 from "../../../../assets/about-page-img/Founded-img2.png"
import FoundedMin from "../../../../assets/about-page-img/Founded-min.png"

const AboutFounded = () => {
    return (
        <div className="mt-16 md:mx-32 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                {/* text section */}
                <div className="space-y-6 pt-10">
                    <div>
                        <p className="text-xl font-medium text-[#b99272] ">ABOUT KAFFEN</p>
                        <h1 className="text-4xl font-bold text-white pt-5">New London Coffee Founded For Extraordinary Test</h1>
                        <p className="text-xl font-medium text-gray-400 pt-5">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis</p>

                    </div>
                    <div className="pt-5">
                        {/* first */}
                        <div className="flex gap-5 items-center ">
                            <div>
                                <img className="w-28 " src={FoundedImg1} alt="" />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold text-white ">Natural Coffee Beans</h2>
                                <p className="text-xl font-medium text-gray-400">Sed ut perspiciatis unde omnis iste natus error <br /> voluptate accusantium doloremque</p>
                            </div>
                        </div>
                        {/* second  */}
                        <div className="flex gap-5 items-center pt-5">
                            <div>
                                <img className="w-28" src={FoundedImg2} alt="" />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold text-white">100% ISO Certification</h2>
                                <p className="text-xl font-medium text-gray-400">Sed ut perspiciatis unde omnis iste natus error <br /> voluptate accusantium doloremque</p>
                            </div>
                        </div>
                        <div className="pt-5">
                            <a href="#" className="custom-btn btn-14 relative  top-6 ">Our Home</a>
                        </div>
                    </div>
                </div>

                {/* img section */}
                <div>
                    <img src={FoundedMin} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutFounded;