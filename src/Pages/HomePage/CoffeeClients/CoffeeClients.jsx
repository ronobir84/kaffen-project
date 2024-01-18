 
import clientImg1 from "../../../assets/image/client-img1.jpg"
import clientImg2 from "../../../assets/image/client-img2.jpg"
import clientImg3 from "../../../assets/image/client-img3.jpg"
const CoffeeClients = () => {
    return (
        <div className="main-container py-20">
            <div className="text-center space-y-4">
                <p className="text-xl font-medium text-[#b99272]">CUSTOMER FEEDBACK</p>
                <h2 className="text-5xl text-white font-bold">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 md:space-y-0 space-y-14 md:mx-32 mx-[45px]  mt-36">
                {/* first client */}
                <div className='w-80 h-[400px] bg-[#0E1317] rounded '>
                    <div className="relative bottom-10">
                        <img className='w-24 rounded-full mx-auto' src={clientImg1} alt="" />
                    </div>
                    <div className=" space-y-3 text-center px-6">
                        <div className="rating relative bottom-3 ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                        </div>
                        <div>
                            <p className="text-lg text-gray-400 font-medium ">Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremqu laudantium totam remriam eaque quae abillo</p>
                            <h1 className="text-2xl font-semibold text-white pt-2">Frederick S. France </h1>
                            <p className="text-xl font-bold text-[#b99272] pt-2">Web Deigner</p>
                        </div>
                    </div>
                </div>

                {/* second client */}
                <div className='w-80 h-[400px] bg-[#0E1317]  rounded'>
                    <div className="relative bottom-10">
                        <img className='w-24 rounded-full mx-auto' src={clientImg2} alt="" />
                    </div>
                    <div className=" space-y-3 text-center px-6">
                        <div className="rating relative bottom-3 ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                        </div>
                        <div>
                            <p className="text-lg text-gray-400 font-medium ">Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremqu laudantium totam remriam eaque quae abillo</p>
                            <h1 className="text-2xl font-semibold text-white pt-2">James M. London  </h1>
                            <p className="text-xl font-bold text-[#b99272] pt-2">Lawyer</p>
                        </div>
                    </div>
                </div>

                {/* third client */}
                <div className='w-80 h-[400px] bg-[#0E1317]  rounded'>
                    <div className="relative bottom-10">
                        <img className='w-24 rounded-full mx-auto' src={clientImg3} alt="" />
                    </div>
                    <div className=" space-y-3 text-center px-6">
                        <div className="rating relative bottom-3 ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                        </div>
                        <div>
                            <p className="text-lg text-gray-400 font-medium ">Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremqu laudantium totam remriam eaque quae abillo</p>
                            <h1 className="text-2xl font-semibold text-white pt-2">Olivia D. New York  </h1>
                            <p className="text-xl font-bold text-[#b99272] pt-2">Dentist</p>
                        </div>
                    </div>
                </div>
                 
                
                {/* four client */}
                <div className='w-80 h-[400px] bg-[#0E1317]  rounded'>
                    <div className="relative bottom-10">
                        <img className='w-24 rounded-full mx-auto' src={clientImg1} alt="" />
                    </div>
                    <div className=" space-y-3 text-center px-6">
                        <div className="rating relative bottom-3 ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#b99272]" />
                        </div>
                        <div>
                            <p className="text-lg text-gray-400 font-medium ">Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremqu laudantium totam remriam eaque quae abillo</p>
                            <h1 className="text-2xl font-semibold text-white pt-2">Frederick S. France </h1>
                            <p className="text-xl font-bold text-[#b99272] pt-2">Web Deigner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeClients;