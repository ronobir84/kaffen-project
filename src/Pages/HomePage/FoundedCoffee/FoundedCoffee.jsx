import FoundedImg from "../../../assets/image/Founded-man-img.jpg"
import FoundedCoffee1 from "../../../assets/image/Founded-img-1.png"
import FoundedCoffee2 from "../../../assets/image/Founded-img-2.png"
const FoundedCoffee = () => {
    return (
        <div>
            <div>
                <div>
                    <img src={FoundedImg} alt="" />
                </div>
                <div>
                    <p>WHY CHOOSE US</p>
                    <h2>New London Coffee Founded For Extraordinary Test</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis</p>
                    <div>
                        <img src={FoundedCoffee1} alt="" />
                        <h1>Natural Coffee Beans</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                    </div>
                    <div>
                        <img src={FoundedCoffee2} alt="" />
                        <h1>100% ISO Certification</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoundedCoffee;