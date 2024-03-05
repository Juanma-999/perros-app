import { Link } from "react-router-dom";
import dogData from "./dogData";
import ownerData from "./ownerData";
import "./Home.css";

export default function Home() {

    const getOwner = (dog) => {
        const owner = ownerData.find(owner => owner.id === dog.ownerId);
        if (owner) {
            return (
                <span>
                    <Link to={`/profile/${owner.id}`}>{owner.name}</Link>
                </span>
            );
        } else {
            return "Unknown";
        }
    }

    return (
        <div>
            <h1>Home page</h1>
            <p>Link to your profile.</p>
            <h2>Dogs Available for Walking:</h2>
            <div className="card-container">
                {dogData.map(dog => (
                    <div key={dog.id} className="card">
                        <h3>{dog.name}</h3>
                        <p>Breed: {dog.breed}</p>
                        <p>Age: {dog.age}</p>
                        <p>Area: {dog.area}</p>
                        <p>Duration: {dog.duration}</p>
                        <p>Owner: {getOwner(dog)}</p>
                        <Link to={`/dogdetail/${dog.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}