import { Link, useParams } from "react-router"; 
import { useState, useEffect } from "react";
import ReactImageGallery from "react-image-gallery";
import { PupPics } from "../PupPics.js";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styling/InfoPage.css";

const InfoPage = (props) => {

    const { name } = useParams();  // Get the destination name from the URL parameters
    const [ info, setInfo ] = useState([]);  // State to hold the destination information
    
    useEffect(() => {
        fetch(`http://localhost:8080/api/doggyDestinations/${name}`)
            .then(response => response.json())
            .then(data => setInfo(data));
        }, [name]);  // Fetch the destination information when the component mounts or when name changes

    const [ reviewData, setReviewData ] = useState({
        name: "",
        rating: "",
        review: ""
    });

    const handleReviewChange = (event) => { // Handle changes in the review form inputs
        event.preventDefault();
        const { name, value } = event.target;
        setReviewData((prevData) => ({ 
            ...prevData, 
            [name]: value 
        }));
    };

    const handleAddReview = (reviews) => {  // Function to add a new review to the state
        props.setReviews((prevReviews) => 
            [ ...prevReviews, reviews ]);                 
    };    

    const saveNewReview = async review => {

        await fetch("http://localhost:8080/api/destinationReviews/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(review)
        })        
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
            saveNewReview(reviewData)
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
                    <Link to="/destinationReviews"><button type="submit" onClick={handleReviewSubmit}>Submit Review</button></Link>
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