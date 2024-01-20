import AboutBanner from "../AboutBanner/AboutBanner";
import AboutFounded from "../AboutBanner/AboutFounded/AboutFounded";

 

const AboutHome = () => {
    return (
        <div className="">
            <div>
                <AboutBanner></AboutBanner>
            </div>
            <div>
                <AboutFounded></AboutFounded>
            </div>
        </div>
    );
};

export default AboutHome;