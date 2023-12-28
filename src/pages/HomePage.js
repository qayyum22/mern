import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const HomePage = () => {

    return (
        <div>
            <Navbar />
            {/* <div><Link to={"/resources"}>Resources Section</Link></div> */}
            
            {/* <div>
                <Link to={"/json"}>JSON</Link>
            </div> */}
        </div>

    )
};

export default HomePage;