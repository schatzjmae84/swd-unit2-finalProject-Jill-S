import { useParams } from "react-router"; 
import { Link } from "react-router";
import ReactImageGallery from "react-image-gallery";
import { PupPics } from "./PupPics.js";
import "react-image-gallery/styles/css/image-gallery.css";
import "./InfoPage.css";

const InfoPage = ({ data }) => {

    const {doggyDestinations} = useParams();

    return (

        <div> 
            <h2>{doggyDestinations}</h2>
            <div className="container">
                <div className="item0">
                <h2>{data.activity}</h2>
                </div>
                <div className="item1">
                    <h3>{data.name}</h3>
                    <h4>{data.rating}</h4>
                        <p>{data.description}</p>
                        <p>{data.address}</p>
                    <Link to={data.website}>{data.name} Website</Link>                                
                </div>
            </div>
            <div className="image-gallery">
                <div className="image-title">
                    <h2>Thank you for visiting the Doggy Destination App!</h2>
                </div>
                <div className="image-gallery-wrapper">
                    <ReactImageGallery items={PupPics}
                    autoPlay={true}
                    lazyLoad={true}
                     />
                </div>
            </div>
        </div>
    )
};

export default InfoPage;