import { Link, useParams } from "react-router"; 
import { useState, useEffect } from "react";
import ReactImageGallery from "react-image-gallery";
import { PupPics } from "../PupPics.js";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styling/InfoPage.css";

const InfoPage = () => {

    const { name } = useParams();  // Get the destination name from the URL parameters
    const [ info, setInfo ] = useState([]);  // State to hold the destination information
    
    useEffect(() => {
        fetch(`http://localhost:8080/api/doggyDestinations/${name}`)
            .then(response => response.json())
            .then(data => setInfo(data));
        }, [name]);  // Fetch the destination information when the component mounts or when name changes

    return (
        <div> 
            <div className="container">
                <div className="item0">
                <h2>{name}</h2>
                </div>
                <div className="item1">
                    <h3>{info.description}</h3>
                    <h4>Rating:  {info.rating} out of 5</h4>
                        { info.address && typeof info.address === "object" ? (  /* Check if address is an object */
                            <p>Address:  {info.address.addressOne}, {info.address.city}, {info.address.state} {info.address.zipCode}</p>
                        ) : (
                            <p>{info.address}</p>
                        )}
                    <Link to={info.website}>{info.name} Website</Link>                                
                </div>
            </div>
            <div className="review-section">
                <h3><strong>Want to help others learn about these fun pup destinations? Click the button to leave a Review!</strong></h3>
                <button>
                    <Link to="/destinationReviews">Leave a Review!</Link>  {/* Link to the review page */}
                </button>
                <button>
                    <Link to="/IdealInfo">Check out more Doggy Destinations!</Link>  {/* Link to return to the main destinations page */}
                </button>
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