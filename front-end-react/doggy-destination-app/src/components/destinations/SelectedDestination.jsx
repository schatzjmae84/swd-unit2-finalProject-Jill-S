import { Link, useParams } from "react-router";
import image from "../../assets/pupPic1.jpg";
import picture from "../../assets/pupPic2.jpg";   
import dogPic from "../../assets/pupPic4.jpg";
import { useState } from "react";
import RiseLoader from 'react-spinners/RiseLoader';
import "../styling/SelectedDestination.css";


const SelectedDestination = () => {
    
    const { idealInfo } = useParams(); 
        
    const [ activityType, setActivityType ] = useState(""); // Use of state to handle activity type changes in the drop menu
    const [ error, setError ] = useState("");  // Error handling if no activity is chosen
    const [ loading, setLoading ] = useState(false);
    const [ activities, setActivities] = useState([]); // Use of state to handle the activities chosen in the drop menu and display them
    const [ hover, setHover ] = useState(false);  // Fun hover pup messages on included images
    
    const destinationNames = {
        Outdoor: [ "Willmore Dog Park", "Central Park Maplewood", "SLU Dog Park & Sculpture Garden"],
        Social: ["The Barn", "Zoomies Pet Cafe + Boutique", "Rockwell Beer Garden"],
        PupEvents: ["St. Louis, MO Boston PlayDate", "Sunday Funday! Dog Yoga at Third Wheel Brewing", "4th Annual Dog's Day Out", "MEHS Woofstock 2025"]
    }; 
    
    const displayActivities = () => {           
        if (!activityType) {
            setError("Please, select an activity to get started!");
            return;
        }
        setError("");
        setLoading(true);
        setTimeout(() => {
            setActivities(destinationNames[activityType]);
            setLoading(false);
        }, 2000);
    }; 
    
    const hoverData = "'I can't wait to get to the Dog Park!'";
    const hoverMessage = "'We love playing fetch with our BALL!'";
    const hoverPhrase = "'Isn't it so cool that our humans brought us to the Dog Park today?!'";

    const onHover = (event) => {
        event.preventDefault();
        setHover(true);
    };

    const onHoverOver = (event) => {
        event.preventDefault();
        setHover(false);
    }; 
    
    return (
        <div className="selected-destination">
            <h2>{idealInfo}</h2>
            <h2>Here are some places you can go with your pup based on your search!</h2>
            <label>
                <h2>Select the type of activity you are interested in:</h2>
                <select className="drop-menu" value={activityType} onChange={(event) => setActivityType(event.target.value)}>
                    <option value="">--Doggy Destinations--</option>
                    <option value="Outdoor">Outdoor Adventures</option>
                    <option value="Social">Social Settings for both of you!</option>  
                    <option value="PupEvents">Pup Events in the area</option>    
                </select> 
            </label>
            <div>
                {/* Display a loading spinner while fetching activities */}
                { loading ? <RiseLoader color="purple" loading={loading} /> :
                <button onClick={displayActivities}>Display Pup Activities!</button>}                
            </div>
                {error && <p style={{color: "red"}}>{error}</p>} 
                {activities.length > 0 && (                                               
                <div className="selected">
                    <h2>Here are the Doggy Destinations in the category you selected:</h2>
                    <ul>
                        {activities.map((activity, index) => (
                            <li key={index}>
                            <Link to={`/doggyDestinations/${activity}`}>{activity}</Link>
                            </li>
                        ))} 
                    </ul>                          
                </div>
                )}                                  
              <div className="flex-container">
                <div onMouseEnter={(event) => onHover(event)}
                    onMouseLeave={(event) => onHoverOver(event)}>              
                <img className="image" src={image} width="225" height="250" alt="Dog in car" />        
                {hover && (        
                    <div>
                        <p>{hoverData}</p>
                    </div>
                )}
                </div>
                <div onMouseEnter={(event) => onHover(event)}
                    onMouseLeave={(event) => onHoverOver(event)}>
                <img className="picture" src={picture} width="335" height="250" alt="Happy Dogs playing at the Park" />
                    {hover && (        
                    <div>
                        <p>{hoverMessage}</p>
                    </div>
                )}
                </div>
                <div onMouseEnter={(event) => onHover(event)}
                    onMouseLeave={(event) => onHoverOver(event)}>
                <img className="dogPic" src={dogPic} width="360" height="250"  alt="Four Dogs on a Log" />
                    {hover && (        
                    <div>
                        <p>{hoverPhrase}</p>
                    </div>
                )}
                </div>             
            </div><br />
        </div>        
    );
};

export default SelectedDestination;    


