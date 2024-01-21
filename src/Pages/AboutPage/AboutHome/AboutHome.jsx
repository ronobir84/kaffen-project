import AboutBanner from "../AboutBanner/AboutBanner";
import AboutFounded from "../AboutBanner/AboutFounded/AboutFounded";
import AboutPremium from "../AboutPremium/AboutPremium";
import AboutVideo from "../AboutVideo/AboutVideo";

 

const AboutHome = () => {
    return (
        <div className="">
            <div>
                <AboutBanner></AboutBanner>
            </div>
            <div>
                <AboutFounded></AboutFounded>
            </div>
            <div>
                <AboutPremium></AboutPremium>
            </div>
            <div>
                <AboutVideo></AboutVideo>
            </div>
        </div>
    );
};

export default AboutHome;