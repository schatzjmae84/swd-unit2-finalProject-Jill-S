import EditableText from "./EditableText.jsx";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


const DestinationReviews = ( ) => {

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

    const saveNewReview = async review => {

        await fetch("http://localhost:8080/api/destinationReviews/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(review)
        });
        fetch("http://localhost:8080/api/destinationReviews")
        .then(response => response.json())
        .then(data => setReviews(Array.isArray(data) ? data : []));        
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
        .then(data => setReviews(Array.isArray(data) ? data : [])); // Refresh the reviews after update
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
            setReviews(prevReviews => prevReviews.filter(review => review.id !== id));
            toast.success("Review deleted successfully!", { 
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                transition: Bounce,
            });
        })
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
            <div className="reviews">
            <h2>{DestinationReviews}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.length === 0 ? (
                            <tr>
                                <td colSpan="3">No reviews yet. Be the first to leave a review!</td>
                            </tr>
                        ) : (
                            reviews.map(review => (
                                <tr key={review.id} id={review.id} value={review.id}>
                                    <td>{review.name}</td>
                                    <td>
                                        <div>
                                    <EditableText
                                        value={editDraft[review.id]?.rating ?? review.rating}
                                        onChange={(value) =>
                                            setEditDraft((prev) => ({
                                            ...prev,
                                            [review.id]: {
                                                ...prev[review.id],
                                                rating: value,
                                                review: prev[review.id]?.review ?? review.review,
                                            },
                                            }))
                                        }
                                    />    
                                    </div>
                                </td>
                                <td>
                                    <div>
                                    <EditableText
                                      value={editDraft[review.id]?.review ?? review.review}
                                        onChange={(value) =>
                                            setEditDraft((prev) => ({
                                            ...prev,
                                            [review.id]: {
                                                ...prev[review.id],
                                                rating: prev[review.id]?.rating ?? review.rating,
                                                review: value,
                                            },
                                            }))
                                        }  
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
                        )))}
                    </tbody>
                </table>
                <ToastContainer />       
            </div>
        </div>    
    )
};

export default DestinationReviews;