import FoundedImg1 from "../../../../assets/about-page-img/Founded-img1.png"
import FoundedImg2 from "../../../../assets/about-page-img/Founded-img2.png"
import FoundedMin from "../../../../assets/about-page-img/Founded-min.png"

const AboutFounded = () => {
    return (
        <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* text section */}
                <div>
                    <div>
                        <p className="text-xl font-medium text-[#b99272]">ABOUT KAFFEN</p>
                        <h1 className="text-4xl font-bold text-white">New London Coffee Founded For Extraordinary Test</h1>
                        <p className="text-xl font-medium text-gray-400">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis</p>

                    </div>
                    <div>
                        {/* first */}
                        <div>
                            <div>
                                <img src={FoundedImg1} alt="" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-semibold text-white ">Natural Coffee Beans</h2>
                                <p className="text-xl font-medium text-gray-400">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                            </div>
                        </div>
                        {/* second  */}
                        <div>
                            <div>
                                <img src={FoundedImg2} alt="" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-semibold text-white">100% ISO Certification</h2>
                                <p className="text-xl font-medium text-gray-400">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                            </div>
                        </div>
                        <div>
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