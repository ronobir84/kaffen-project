import AboutMenu from "../AboutMenu/AboutMenu";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Booking from "../Booking/Booking";
import CoffeeClients from "../CoffeeClients/CoffeeClients";
import CoffeeItem from "../CoffeeItem/CoffeeItem";
import CoffeeMenu from "../CoffeeMenu/CoffeeMenu";
import CoffeeNews from "../CoffeeNews/CoffeeNews";
import FoundedCoffee from "../FoundedCoffee/FoundedCoffee";
import Premium from "../Premium/Premium";

 
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
            <div>
                <FoundedCoffee></FoundedCoffee>
            </div>
            <div className="bg-[#0E1317]">
                <CoffeeItem></CoffeeItem>
            </div>
            <div>
                <CoffeeClients></CoffeeClients>
            </div>
            <div>
                <Premium></Premium>
            </div>
            <div>
                <CoffeeNews></CoffeeNews>
            </div>
            <div>
                <Booking></Booking>
            </div>
        </div>
    );
};

export default Home;