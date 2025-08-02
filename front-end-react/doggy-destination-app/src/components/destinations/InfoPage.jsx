import { Link, useParams } from "react-router"; 
import { useState, useEffect, use } from "react";
import ReactImageGallery from "react-image-gallery";
import { PupPics } from "../PupPics.js";
import { ToastContainer, toast, Bounce } from "react-toastify";
import EditableText from "./EditableText.jsx";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styling/InfoPage.css";

const InfoPage = () => {

    const { name } = useParams();  // Get the destination name from the URL parameters
    const [ info, setInfo ] = useState([]);  // State to hold the destination information

    useEffect(() => {
        fetch(`http://localhost:8080/api/doggyDestinations/destinations/${name}`)
            .then(response => response.json())
            .then(data => setInfo(data));
        }, [name]);  // Fetch the destination information when the component mounts or when the name changes

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
        setReviews((prevReviews) => 
            [ ...prevReviews, reviews ]);                 
    };

    useEffect(() => {
        fetch(`http://localhost:8080/api/doggyDestinations/destinations/${name}/reviews`)
            .then(response => response.json())
            .then(data => {
                setReviews(data);
            });
    }, [name]);

    const saveNewReview = async review => {

        await fetch(`http://localhost:8080/api/doggyDestinations/destinations/${name}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(review)
        })
        await fetch(`http://localhost:8080/api/doggyDestinations/destinations/${name}/reviews`)
            .then(response => response.json())
            .then(data => setReviews(data));
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
    const updateReview = id => {
        const reviewToUpdate = reviews.find(review => review.id === id);
        
        fetch(`http://localhost:8080/api/doggyDestinations/destinations/${name}/reviews/${id}`, {
            method: "PUT",
            body: JSON.stringify(reviewToUpdate),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        })
        .then(response => response.json())
        .then(() => {
            toast.success("Thank you for updating your review!", {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                transition: Bounce,
            });                         
        })
    };

    const deleteReview = id => {
        fetch(`http://localhost:8080/api/doggyDestinations/destinations/${name}/reviews/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.json())
            .then(() => {
                setReviews(reviews.filter(review => review.id !== id));
                toast.success("Review deleted successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    closeOnClick: true,
                    draggable: true,
                    transition: Bounce,
                });
            });
        };

    const handleReviewUpdate = (id, key, value) => {
        setReviews((prevReviews) =>
            prevReviews.map((review) =>
                review.id === id ? { ...review, [key]: value } : review
            )
        );
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
            <div className="reviews">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map(review => (
                            <tr key={review.id} id={review.id} value={review.id}>
                                <td>{review.id}</td>
                                <td>{review.name}</td>
                                <td>
                                    <div>
                                    <EditableText
                                        value={review.rating}
                                        onChange={(value) => handleReviewUpdate(review.id, 'rating', value)}
                                    />    
                                    </div>
                                </td>
                                <td>
                                    <div>
                                    <EditableText
                                        value={review.review}
                                        onChange={(value) => handleReviewUpdate(review.id, 'review', value)}
                                    />
                                    </div>
                                </td>
                                <td>
                                    <button intent="primary" onClick={() => updateReview(review.id)}>Update</button>
                                </td>
                                <td>
                                    <button intent="danger" onClick={() => deleteReview(review.id)}>Delete</button>
                                </td>                                
                            </tr>
                        ))}
                    </tbody>
                </table>         
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