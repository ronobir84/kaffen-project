import AboutMenu from "../AboutMenu/AboutMenu";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import CoffeeMenu from "../CoffeeMenu/CoffeeMenu";

 
const Home = () => {
    return (
        <div>
            <div >
                <Banner></Banner>
            </div>
            <div className="bg-[#090C0F] ">
                <AboutUs></AboutUs>
                <AboutMenu></AboutMenu>
            </div>
            <div>
                <CoffeeMenu></CoffeeMenu>
            </div>
        </div>
    );
};

export default Home;