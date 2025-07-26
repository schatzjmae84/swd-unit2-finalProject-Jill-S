import { useParams } from "react-router"; 
import { Link } from "react-router";
import ReactImageGallery from "react-image-gallery";
import { PupPics } from "./PupPics.js";
import "react-image-gallery/styles/css/image-gallery.css";
import "./InfoPage.css";

const InfoPage = () => {

    const {doggyDestinations} = useParams();

    return (

        <div> 
            <h2>{doggyDestinations}</h2>
            <div className="container">
                <div className="item0">
                <h2>Outdoor Pup Places:</h2>
                </div>
                <div className="item1">
                    <h3>Willmore Dog Park</h3>
                        <p>Large area with a beautiful dog park, ponds, picnic spots, and play areas.</p>
                        <p>7200 Hampton Ave, St. Louis, MO 63109</p>
                        <Link to="https://www.stlouis-mo.gov/government/departments/parks/parks/browse-parks/view-park.cfm?parkID=93&parkName=Willmore">Willmore Dog Park Website</Link>        
                </div>
                <div className="item2">
                    <h3>Central Park Maplewood</h3>
                        <p>This is a membership only dog park!  Memberships are annual and must be renewed each year.</p>
                        <p>7461 Elm Ave, Maplewood, MO 63143</p>
                        <Link to="https://www.maplewoodmo.gov/government/departments/dog_park/index.php">Central Park Maplewood Website</Link>
                </div>
                <div className="item3">
                    <h3>SLU Dog Park & Sculpture Garden</h3>
                        <p>A beautiful park with great sculptures and lots of space for your pup to run and play!</p>
                        <p>1 N. Grand Blvd, St. Louis, MO 63103</p>
                        <p>No Website Available</p>
                </div>
                <div className="item4"> 
                 <h2>Social Scenes for Pup and People:</h2> 
                </div>                             
                <div className="item5">                                        
                    <h3>Bar K St. Louis</h3>
                        <p>A pup friendly bar that has food, drinks, and hosts local events for you and your pup!</p>
                        <p>4565 McRee Ave, St. Louis, MO 63110</p>
                        <Link to="https://barkdogbar.com/locations/st-louis-mo/">Bar K Dog Bar Website</Link>
                </div>

                <div className="item6">
                    <h3>Zoomies Pet Cafe + Boutique</h3>
                        <p>Good food, good coffee, fun pup treats and trinkets in the boutique, and a fun outdoor area for the pups to play while you relax!</p>
                        <p>5838 Macklind Ave, St. Louis, MO 63109</p>
                        <Link to="https://www.zoomiespetcafe.com/eat-drink-play">Zoomies Pet Cafe Website</Link>
                </div>
                <div className="item7">
                    <h3>Rockwell Beer Garden</h3>
                        <p>Pizza, pups, and pints!  All located in wonderful Francis Park!</p>
                        <p>5300 Donovan Ave, St. Louis, MO, 63109</p>
                        <Link to="https://www.rockwellbeer.com/francis-park">Rockwell Beer Garden Website</Link>
                </div>
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
        </div>
    )
};

export default InfoPage;