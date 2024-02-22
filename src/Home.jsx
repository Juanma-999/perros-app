import { Link } from "react-router-dom";
import dogData from "./dogData";
import "./Home.css";

export default function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <p>This is the home page.</p>
            <h2>Dogs Available for Walking:</h2>
            <div className="card-container">
                {dogData.map(dog => (
                    <div key={dog.id} className="card">
                        <h3>{dog.name}</h3>
                        <p>Breed: {dog.breed}</p>
                        <p>Age: {dog.age}</p>
                        <p>Area: {dog.area}</p>
                        <p>Duration: {dog.duration}</p>
                        <Link to={`/dogdetail/${dog.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}