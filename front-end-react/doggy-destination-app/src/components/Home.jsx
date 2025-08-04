import pic from "../assets/pupPic3.jpg";
import { Link } from "react-router";

const Home = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Welcome to the Doggy Destination App!</h1>
            <p><strong>Are you trying to find a fun place that both you and your pup can enjoy?  Then you have come to the right place!</strong></p>
            <Link to="/pupPlaces"><button>Let's Get Started!</button></Link> {/* This button will take you to the about page. */}
            <div className="flex-container">
                <img className="pic" src={pic} width="375" height="275" alt="Dog wearing glasses!" />
            </div>
        </div>        
    );
};

export default Home;