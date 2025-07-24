import { useState} from "react";
import { useParams } from "react-router";
import "./Form.css";
import DestinationInfo from "./DestinationInfo";

export default function Main() {    

    const {pupPlaces} = useParams();

    // Using destructuring to set up state for our Pup Place Participant Form
    const [ form, setForm ] = useState({
        pupName: "",
        username: "",
        dogBreed: "",
        activity: "",
        zipCode: "",
    });

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
                form={form}
              />                       
        </div>
    );
};

