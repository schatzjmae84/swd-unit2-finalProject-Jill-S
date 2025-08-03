import { useState} from "react";
import { useParams } from "react-router";
import "../styling/Form.css";
import DestinationInfo from "./DestinationInfo";
import { useNavigate } from "react-router";

// Variable to hold the initial form state
let initialForm = {
    pupName: "",
    username: "",
    dogBreed: "",
    activity: "",
    zipCode: "",
};

const Main = () => {    

    const {pupPlaces} = useParams();

    const [ form, setForm ] = useState(initialForm); // Use of state to handle the form data

    const navigate = useNavigate();  

    // Using the following handlers to update the corresponding form properties from state
    const handleUpdatePupName = (input) => {
        setForm(prevState => {
            return {
            ...prevState,
            pupName: input,
            }
        });
    };

    const handleUpdateUsername = (input) => {
        setForm(prevState => {
            return {
            ...prevState,
            username: input,
            }
        });
    };

    const handleUpdateDogBreed = (input) => {
        setForm(prevState => {  
            return {
            ...prevState,
            dogBreed: input,
            }
        });
    };

    const handleUpdateActivity = (input) => {
        setForm(prevState => {
            return {
            ...prevState,
            activity: input,
            }
        });
    };

    const handleUpdateZipCode = (input) => {
        setForm(prevState => {
            return {
            ...prevState,
            zipCode: input,
            }
        });
    };

    // Function to save the new form data
    const saveNewForm = async form => {

        await fetch('http://localhost:8080/api/pupPlaces/forms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'                   
            },
            body: JSON.stringify(form),
        });        
        navigate('/pupPlaces');
    };        
    
    return (

        <div style={{textAlign: "center", marginTop: "20px"}}>   
            <h2>{pupPlaces}</h2>                
                <p className="appIntro">
                    This app is created to help dog owners seek out places that they can go and take their puppers with them.    
                </p> 
                <p className="appIntro2">Whether you are looking for an outdoor dog park to give your dog some exercise, or maybe you are wanting to get out and socialize with other dog owners?                    
                </p>
                <p className="appIntro3">This site is what you are looking for to get you to your desired "Doggy Destination!"                    
                </p>
                <p className="question">
                    Would you like to become a "Pup Place Participant"?  Submit the form below to get signed up for other app pupPerks! 
                </p>   

            {/* Passing the form state and update functions as props to the DestinationInfo component */}                            
            <DestinationInfo
                updatePupName={handleUpdatePupName}
                updateUsername={handleUpdateUsername}
                updateDogBreed={handleUpdateDogBreed}
                updateActivity={handleUpdateActivity}
                updateZipCode={handleUpdateZipCode}
                saveNewForm={saveNewForm} 
                form={form}
              />                       
        </div>
    );
};

export default Main;

