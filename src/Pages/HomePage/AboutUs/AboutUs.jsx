import coffeeImg from "../../../assets/image/coffee-about.png"
 import coffeeClient from "../../../assets/image/coffee-client.png"
const AboutUs = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="md:mt-44 md:ml-32 space-y-6">
                    <p className="text-xl text-[#b99272] font-medium ">ABOUT US</p>
                    <h2 className="text-5xl text-white font-semibold ">Organic & Fresh Coffee <br /> Provider Center</h2>
                    <p className="text-xl text-gray-400 ">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
                    <div className="flex items-center gap-8 bg-[#B99272] md:w-[530px] h-36 px-8 rounded-md pt-4">
                        <img src={coffeeClient} alt="" />
                        <h3 className="text-2xl font-medium text-white">Quis autem vel eum iure <br /> reprehenderit in ealuptate velit <br /> esse molestiae</h3>
                    </div>
                </div>
                <div>
                    <img className="w-[900px]" src={coffeeImg} alt="" />

                </div>
            </div>
        </div>
    );
};

export default AboutUs;