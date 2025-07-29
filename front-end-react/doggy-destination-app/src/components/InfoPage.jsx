import { useParams } from "react-router"; 
import { useState } from "react";
import { Link } from "react-router";
import ReactImageGallery from "react-image-gallery";
import { PupPics } from "./PupPics.js";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-image-gallery/styles/css/image-gallery.css";
import "./InfoPage.css";

const InfoPage = ( { destination } ) => {

    const { destinationId } = useParams();
    const [ info ] = [...destination].filter((item) => item.id == destinationId);
    
    const [ reviewData, setReviewData ] = useState({
        name: "",
        rating: "",
        review: ""
    });

    const handleReviewChange = (event) => {
        const { name, value } = event.target;
        setReviewData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleReviewSubmit = (event) => {
        event.preventDefault();
        if (!reviewData.name || !reviewData.rating || !reviewData.review) {
            toast.error("Please, fill out all fields before submitting your review.", {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                transition: Bounce,
            });            
        } else {}
    };

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
            <div>
                <form className="review-form">
                    <h3>Did you check out one of our Doggy Destinations?? Leave a Review and tell us what you thought!!</h3>
                    <label>
                        <input required placeholder="Name" type="text" name="name" value={reviewData.name} 
                        onChange={handleReviewChange} />
                    </label>
                    <label>
                        <input required placeholder="Rating (1-5)" type="number" name="rating" value={reviewData.rating}
                        onChange={handleReviewChange} min="1" max="5" />
                    </label>
                    <label>
                        <textarea required placeholder="Let us know what you thought!" rows="4" cols="50" name="review" value={reviewData.review} 
                        onChange={handleReviewChange} />
                        <textarea />
                    </label>                   
                    <button type="submit">Submit Review</button>
                </form>
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