import coffeeImg from "../../../assets/image/coffee-about.png"
 import coffeeClient from "../../../assets/image/coffee-client.png"
const AboutUs = () => {
    return (
        <div data-aos="zoom-in-down">
            <div className="grid grid-cols-1 md:grid-cols-2 md:p-0 p-4">
                <div className="md:mt-44 md:ml-32 space-y-6">
                    <p className="text-xl text-[#b99272] font-medium ">ABOUT US</p>
                    <h2 className="md:text-5xl text-4xl text-white font-semibold ">Organic & Fresh Coffee <br /> Provider Center</h2>
                    <p className="md:text-xl text-lg text-gray-400 ">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
                    <div className="flex items-center gap-8 bg-[#B99272] md:w-[530px]  md:h-36 h-44  md:px-8 rounded-md md:pt-4">
                        <img src={coffeeClient} alt="" />
                        <h3 className="md:text-2xl text-xl font-medium text-white">Quis autem vel eum iure  reprehenderit in ealuptate velit  esse molestiae</h3>
                    </div>
                </div>
                <div>
                    <img className="md:w-[900px] md:mt-0 mt-8" src={coffeeImg} alt="" />

                </div>
            </div>
        </div>
    );
};

export default AboutUs;