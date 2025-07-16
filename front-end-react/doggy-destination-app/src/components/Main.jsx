import { useState} from "react";
import { useParams } from "react-router";
import "./Form.css";
import pupData from "../assets/data.json" // Used import instead of fetching JSON
import DestinationInfo from "./DestinationInfo";

export default function Main() {

    const {pupPlaces} = useParams();

    // State variable to hold all destination objects
    const [ pupInfo, setPupInfo ] = useState(
        pupData.map(object => {
            return { ...object };
        })
    );

    const handleUpdateActivity = (pupActivity) => {
        setPupInfo(prevState => {
            return { ...prevState, activity: pupActivity};            
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
            <DestinationInfo updateActivity={handleUpdateActivity}
            info={pupInfo} />                       
        </div>
    );
};

