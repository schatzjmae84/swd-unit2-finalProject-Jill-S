import EditableText from "./EditableText.jsx";
import InfoPage from "./InfoPage.jsx";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useEffect, useState } from "react";


const DestinationReviews = ( ) => {

    const [ reviews, setReviews ] = useState([]);  // State to hold the reviews

    useEffect(() => { 
        fetch("http://localhost:8080/api/destinationReviews", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.json())
            .then(data => {
                setReviews(data);
            });
    }, []);

    const updateReview = id => {
        const reviewToUpdate = reviews.find(review => review.id === id);
        
        fetch(`http://localhost:8080/api/destinationReviews/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(reviewToUpdate)            
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
        fetch(`http://localhost:8080/api/destinationReviews/delete/${id}`, {
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
        <div className="reviews">
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
                        )))}
                    </tbody>
                </table>
                <InfoPage 
                setReviews={setReviews} /> 
                <ToastContainer />       
            </div>
    )
};

export default DestinationReviews;