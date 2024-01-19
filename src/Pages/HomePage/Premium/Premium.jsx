 
const Premium = () => {
    return (
        <div className="bg-[#0E1317] md:h-52 h-96 md:pt-20 pt-16  ">
            <div className="grid grid-cols-1 md:grid-cols-3 md:px-32 md:space-y-0 space-y-6 px-3">
                <div className="flex  gap-5">
                    <div>
                        <h1 className="text-7xl font-medium text-[#b99272]">256+</h1>
                    </div>
                    <div className=" space-y-3">
                        <h3 className="text-2xl font-semibold text-white">Premium Clients</h3>
                        <p className="text-lg font-normal text-gray-400">Sed ut perspiciatis unde</p>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div>
                        <h1 className="text-7xl font-medium text-[#b99272]">362+</h1>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold text-white">Expert Members</h3>
                        <p className="text-lg font-normal text-gray-400">Sed ut perspiciatis unde</p>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div>
                        <h1 className="text-7xl font-medium text-[#b99272]">753+</h1>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold text-white">Winning Awards</h3>
                        <p className="text-lg font-normal text-gray-400">Sed ut perspiciatis unde</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Premium;