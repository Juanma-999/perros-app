import { useParams, Link } from "react-router-dom";
import ownerData from "./ownerData";
import dogData from "./dogData";

export default function OwnerProfile() {
    const { ownerName } = useParams();
    const owner = ownerData.find(owner => owner.name === ownerName);

    if (!owner) {
        return <p>Owner not found</p>;
    }

    const ownedDogs = dogData.filter(dog => owner.dogs.includes(dog.id));

    return (
        <div>
        <h1>{owner.name}'s Profile</h1>
        <h2>Owned Dogs:</h2>
        <ul>
            {ownedDogs.map(dog => (
            <li key={dog.id}>
                <p>Name: {dog.name}</p>
                <p>Breed: {dog.breed}</p>
                <p>Age: {dog.age}</p>
                <p>Area: {dog.area}</p>
                <p>Duration: {dog.duration}</p>
            </li>
            ))}
        </ul>
        <p>
            <Link to={"/"}>Home</Link>
        </p>
        </div>
    );
}