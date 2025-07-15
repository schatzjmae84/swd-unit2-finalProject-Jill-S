import { useState } from "react";
import { Link } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Bounce } from "react-toastify";


const DestinationInfo = (props) => {

    // state variable to store the input from the activity portion of the form
    const [ activityInput, setActivityInput ] = useState("");

    const [ formData, setFormData ] = useState({
        pupName: "",
        dogType: "",
        activity: "",
        zipCode: "",
    });

    const [ errors, setErrors ] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value,});
    };      

    //event handler for the new activity from the activity input
    //when form input is handled in phase 2, this variable will be included in the onClick of the submit button
    const handleActivityChange = (event) => {
        event.preventDefault();
        let pupActivity = (event.target.value);
        setActivityInput(pupActivity);
        props.updateActivity(pupActivity);               
    };    
    
    // form submit event handler and form validation
    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validateNeededInfo(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Thank you for your form submission!");
        }else{
            console.log("Please, review your required information and resubmit.")
        }
    };

    const validateNeededInfo = (data) => {
        const errors = {};

        if (!data.activity) {
            errors.activity = "Activity Selection is Required";
        }

        if (!data.zipCode) {
            errors.zipCode = "Please, enter a valid Zip Code to proceed.";
        }

        return errors;
    };
        

    const submitSuccess = () => {
        toast("Thank you!  Your \'Pup Place Participant Form' has been successfully submitted!", {
            className: "success-toast",
            draggable: true,
            transition: Bounce,
        });
    };     
    

    return (

        <div>                   
        <div className="form-box">
        <form onSubmit={handleSubmit}>
            <div className="field1">
            <h1 className="title">Pup Place Participant Form</h1>
            <label>                
                <input placeholder="Pup's Name" type="text" name="pupName" value={formData.pupName}
                onChange={handleChange}/>
            </label><br />
            <label>                
                <input placeholder="Type of Dog" type="text" name="dogType" value={formData.dogType}
                onChange={handleChange}/>
            </label><br />
            <label>                
                <input placeholder="Type of Pup Activity: Outdoor or Social" type="text" name="activity" value={activityInput} onChange={handleActivityChange}/>
                {errors.activity && (
                    <span className="error-message">
                        {errors.activity}
                    </span>
                )}
            </label><br />
            <label>                
                <input placeholder="Zip Code for Search" type="text" name="zipCode" value={formData.zipCode}
                onChange={handleChange}/>
                {errors.zipCode && (
                    <span className="error-message">
                        {errors.zipCode}
                    </span>
                )}
            </label>
            </div>
        </form>
        </div>            
            <div className="input">
                <h2>Review Your Search Input</h2>
                <p>Pup's Name: {formData.pupName}</p>
                <p>Type of Dog: {formData.dogType}</p>
                <p>Type of Pup Activity: {activityInput}</p>
                <p>Zip Code for Search: {formData.zipCode}</p>
            </div>
            <div>
                <button type="submit" onClick={submitSuccess}>Submit Form</button>
            </div>  
            <div>
                <Link to="/idealInfo"><button>Continue to Pup Activity Info!</button></Link>             
            </div>
            <ToastContainer />      
        </div>
    );
};


export default DestinationInfo;