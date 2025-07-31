import { useNavigate, useParams } from "react-router"; 
import { useState, useEffect } from "react";
import { Link } from "react-router";
import ReactImageGallery from "react-image-gallery";
import { PupPics } from "./PupPics.js";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styling/InfoPage.css";

const InfoPage = ( { allDestinations } ) => {

    const { name } = useParams();  // Get the destination name from the URL parameters
    const [ info, setInfo ] = useState([]);  // State to hold the destination information

    const navigate = useNavigate();

    useEffect(() => {
        if (allDestinations && allDestinations.length > 0) {
            const selectDestination = allDestinations.find(
                (dest) => (dest.name) == (name)
            );
            setInfo(selectDestination);
        }
    }, [allDestinations, name]);

    const [ reviews, setReviews ] = useState([]);  // State to hold the reviews
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

    const handleAddReview = (reviews) => {
        setReviews((prevReviews) => [ ...prevReviews, reviews]);
    };

    const saveNewReview = async review => {

        await fetch(`http://localhost:8080/api/doggyDestinations/destinations/${name}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(review)
        });
        navigate("/doggyDestinations/" + name);

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
        } else {
            handleAddReview(reviewData);  // Add the new review to the state and update the UI
            saveNewReview(reviewData);  // Save the new review to the database            
            setReviewData({
                name: "",
                rating: "",
                review: ""
            });
            toast.success("Thank you for your review!", {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                transition: Bounce,
            });
        }
    };

    return (

        <div> 
            <h2>{name}</h2>
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
                    <h2>Did you check out one of our Doggy Destinations?? Leave a Review and tell us what you thought!!</h2>
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
                    </label>                   
                    <button type="submit" onClick={handleReviewSubmit}>Submit Review</button>
                </form>
            </div>                
            <div>
                <h2>Reviews:</h2>
                <ul>
                {reviews && reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <li key={index} className="review">
                            <strong>{review.name}</strong> rated this Doggy Destination with a {review.rating} out of 5. <br />
                            Review:
                            {review.review}
                        </li>
                    ))                    
                ) : (
                    <p>No reviews yet. Be the first to leave a review!</p>
                )}
                </ul>
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