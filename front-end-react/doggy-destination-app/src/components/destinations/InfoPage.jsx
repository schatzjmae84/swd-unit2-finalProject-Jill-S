import { Link, useParams } from "react-router"; 
import { useState, useEffect } from "react";
import ReactImageGallery from "react-image-gallery";
import { PupPics } from "../PupPics.js";
import { ToastContainer, toast, Bounce } from "react-toastify";
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
                        { info.address && typeof info.address === "object" ? (
                            <p>Address:  {info.address.addressOne}, {info.address.city}, {info.address.state} {info.address.zipCode}</p>
                        ) : (
                            <p>{info.address}</p>
                        )}
                    <Link to={info.website}>{info.name} Website</Link>                                
                </div>
            </div>
            <div className="review-section">
                <p>Want to help others learn about these fun pup destinations? Click the button below to leave a Review!</p>
                <button className="review-button">
                    <Link to="/destinationReviews">Leave a Review!</Link>
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
            <ToastContainer />
        </div>
    )
};

export default InfoPage;