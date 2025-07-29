import { useParams } from "react-router"; 
import { Link } from "react-router";
import ReactImageGallery from "react-image-gallery";
import { PupPics } from "./PupPics.js";
import "react-image-gallery/styles/css/image-gallery.css";
import "./InfoPage.css";

const InfoPage = ( { destination } ) => {

    const { destinationId } = useParams();
    const [ info ] = [...destination].filter((item) => item.id == destinationId);
    

    return (

        <div> 
            <h2>{destinationId}</h2>
            <div className="container">
                <div className="item0">
                <h2>{info.activity}</h2>
                </div>
                <div className="item1">
                    <h3>{info.name}</h3>
                    <h4>{info.rating}</h4>
                        <p>{info.description}</p>
                        <p>{info.address}</p>
                    <Link to={info.website}>{info.name} Website</Link>                                
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