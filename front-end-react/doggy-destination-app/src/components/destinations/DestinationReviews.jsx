import EditableText from "./EditableText.jsx";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import pupPic from "../../assets/pupPic5.jpg";
import puppers from "../../assets/pupPic6.jpg";
import doggyPic from "../../assets/pupPic7.jpg";
import fancyPups from "../../assets/pupPic8.jpg";


const DestinationReviews = () => {

    // Fetch all reviews from the server when the component mounts
    useEffect(() => { 
        fetch("http://localhost:8080/api/destinationReviews", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => response.json())
        .then(data => {
            setReviews(Array.isArray(data) ? data : []);
        })
        .catch(() => setReviews([]));  // If fetch fails, set to an empty array
    }, []);

    const { DestinationReviews } = useParams();

    const [ reviews, setReviews ] = useState([]);  // State to hold the reviews
    const [ editDraft, setEditDraft ] = useState({}); // State to hold the draft edits for reviews
    const [ reviewData, setReviewData ] = useState({   // State to hold the new review data
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

    // Function to POST a new review to the database and update the state
    const saveNewReview = async review => {

        await fetch("http://localhost:8080/api/destinationReviews/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(review)
        });
        fetch("http://localhost:8080/api/destinationReviews")  // Fetch all reviews after adding a new one
        .then(response => response.json())
        .then(data => setReviews(Array.isArray(data) ? data : []));  // Use Array.isArray to ensure data is an array       
    };

    // Function to handle the submission of a new review
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
            saveNewReview(reviewData)
            setReviewData({   // Reset the reviewData state after submission
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

    // Function to update an existing review
    // It fetches the review by ID, updates it with the draft changes, and sends it back to the database
    const updateReview = id => {
        const reviewToUpdate = { ...reviews.find(review => review.id === id), ...editDraft[id] };

        fetch(`http://localhost:8080/api/destinationReviews/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(reviewToUpdate)            
        })
        fetch("http://localhost:8080/api/destinationReviews")
        .then(response => response.json())
        .then(data => setReviews(Array.isArray(data) ? data : [])); // Use Array.isArray to ensure data is an array
        // Reset the editDraft state for the updated review
        setEditDraft((prev) => {
            const copy = { ...prev };
            return copy;
        });
        toast.success("Thank you for updating your review!", {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            draggable: true,
            transition: Bounce,
        });
    };    

    // Function to delete a review by ID
    // It sends a DELETE request to the database and updates the state to remove the deleted review
    const deleteReview = id => {
        fetch(`http://localhost:8080/api/destinationReviews/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => {
            if (!response.ok) throw new Error("Delete failed");
            setReviews(prevReviews => prevReviews.filter(review => review.id !== id));  // Update the state to remove the deleted review
            toast.success("Review deleted successfully!", { 
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                transition: Bounce,
            });
        })
        // Handle any errors that occur during the delete operation
        .catch(() => {
            toast.error("Failed to delete review. Please try again.", {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                transition: Bounce,
            });
        });
    };

    return (
        <div>
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
            <div className="flex-container">
            <h2>{DestinationReviews}</h2>
                <table className="reviews" style={{width: "100%"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Review - Double Click to Update!</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Check if there are any reviews to display */}
                        {reviews.length === 0 ? (
                            <tr>
                                <td colSpan="3"><strong>No reviews yet. Be the first to leave a review!</strong></td>
                            </tr>
                        ) : (
                            reviews.map(review => (
                                <tr key={review.id} id={review.id} value={review.id}>
                                    <td>{review.name}</td>
                                    <td>
                                        <div>
                                    <EditableText
                                        value={editDraft[review.id]?.rating ?? review.rating}  /* Use the draft rating if available, otherwise use the original rating */
                                        onChange={(value) =>
                                            setEditDraft((prev) => ({
                                            ...prev,
                                            [review.id]: {
                                                ...prev[review.id],
                                                rating: value,
                                                review: prev[review.id]?.review ?? review.review,  /* Use the original review if not editing */
                                            },
                                            }))
                                        }
                                    />    
                                    </div>
                                </td>
                                <td>
                                    <div>
                                    <EditableText
                                      value={editDraft[review.id]?.review ?? review.review}  /* Use the draft review if available, otherwise use the original review */
                                        onChange={(value) =>
                                            setEditDraft((prev) => ({
                                            ...prev,
                                            [review.id]: {
                                                ...prev[review.id],
                                                rating: prev[review.id]?.rating ?? review.rating,  /* Use the original rating if not editing */
                                                review: value,
                                            },
                                            }))
                                        }  
                                    />
                                    </div>
                                </td>
                                <td>
                                    <button intent="primary" onClick={() => updateReview(review.id)}>Update Review</button>
                                </td>
                                <td>
                                    <button intent="danger" onClick={() => deleteReview(review.id)}>Delete Review</button>
                                </td>                                
                            </tr>
                        )))}
                    </tbody>
                </table>
                <ToastContainer />       
            </div>
            <div className="flex-container">
                <div>              
                    <img className="image" src={pupPic} width="225" height="300" alt="Sassy frilled-out Chihuahua" />   
                </div>
                <div>
                    <img className="picture" src={puppers} width="425" height="300" alt="The two best pup buds ever!" />
                </div>
                <div>
                    <img className="dogPic" src={doggyPic} width="190" height="300"  alt="Fluffy pup sticking his tongue out" />
                </div> 
                <div>
                    <img className="dogPic" src={fancyPups} width="420" height="300"  alt="Two fancy pugs wearing bowties!" />
                </div>
            </div>
        </div>    
    );
};

export default DestinationReviews;