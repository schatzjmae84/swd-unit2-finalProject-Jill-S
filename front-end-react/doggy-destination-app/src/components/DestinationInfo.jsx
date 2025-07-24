import { useState } from "react";
import { Link } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Bounce } from "react-toastify";


const DestinationInfo = (props) => {

    // State variables to hold values of form input fields.
    const [pupName, setPupName] = useState("");
    const [username, setUsername] = useState("");
    const [dogBreed, setDogBreed] = useState("");
    const [activity, setActivity] = useState("");
    const [zipCode, setZipCode] = useState("");

    // Pup Name input handler (note e is the event object)
    const handlePupNameChange = (e) => {
        e.preventDefault();
        let input = (e.target.value);
        setPupName(input);
        props.updatePupName(input);
    };

    // Username input handler
    const handleUsernameChange = (e) => {
        e.preventDefault();
        let input = (e.target.value);
        setUsername(input);
        props.updateUsername(input);
    };

    // Dog Breed input handler
    const handleDogBreedChange = (e) => {
        e.preventDefault();
        let input = (e.target.value);
        setDogBreed(input);
        props.updateDogBreed(input);
    };

    // Activity input handler
    const handleActivityChange = (e) => {
        e.preventDefault();
        let input = (e.target.value);
        setActivity(input);
        props.updateActivity(input);
    };

    // Zip Code input handler
    const handleZipCodeChange = (e) => {
        e.preventDefault();
        let input = (e.target.value);
        setZipCode(input);
        props.updateZipCode(input);
    };  

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!pupName || !username || !dogBreed || !activity || !zipCode) {
            toast.error("Please, fill out all required fields!", {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                transition: Bounce
            });
        } else {
            toast.success("Thank you! You have successfully signed up for pupPerks!", {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                transition: Bounce
            });
        };
    };

    return (

        <div>                                          
        <div className="form-box">
        <form>
            <div className="field1">
            <h1 className="title">Pup Place Participant Form</h1>
            <label>                
                <input required placeholder="Pup's Name" type="text" name="pupName" value={pupName}
                onChange={handlePupNameChange}/>
            </label><br />
            <label>                
                <input required placeholder="Username" type="text" name="username" value={username}
                onChange={handleUsernameChange}/>
            </label><br />
            <label>
                <input required placeholder="Type of Dog Breed" type="text" name="dogBreed" value={dogBreed}
                onChange={handleDogBreedChange}/>
            </label><br />
            <label>                
                <input required placeholder="Type of Pup Activity: Outdoor, Social, or Pup Event" type="text" name="activity" value={activity} onChange={handleActivityChange}/>                
            </label><br />
            <label>                
                <input required placeholder="Zip Code for Search" type="text" name="zipCode" value={zipCode}
                onChange={handleZipCodeChange}/>                
            </label>
            </div>
        </form>
        </div>            
            <div className="input">
                <h2>Review Your Search Input</h2>
                <p>Pup's Name: {pupName}</p>
                <p>Username: {username}</p>
                <p>Type of Dog Breed: {dogBreed}</p>
                <p>Type of Pup Activity: {activity}</p>
                <p>Zip Code for Search: {zipCode}</p>
            </div>
            <div>
                <button type="submit" onClick={handleSubmit}>Submit Form</button>
            </div>  
            <div>
                <Link to="/idealInfo"><button>Continue to Pup Activity Info!</button></Link>             
            </div>
            <ToastContainer />        
        </div>
    );
};


export default DestinationInfo;