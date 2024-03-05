import { useParams, Link } from "react-router-dom";
import dogData from "./dogData";
import ownerData from "./ownerData";

export default function DogDetail() {
    const { id } = useParams();
    const dog = dogData.find(dog => dog.id === parseInt(id));

    if (!dog) {
        return <p>Dog not found</p>;
    }

    const owner = ownerData.find(owner => owner.id === dog.ownerId);

    return (
        <div>
        <h1>Dog Detail</h1>
        <h2>{dog.name}</h2>
        <p>Breed: {dog.breed}</p>
        <p>Age: {dog.age}</p>
        <p>Area: {dog.area}</p>
        <p>Duration: {dog.duration}</p>
        <p>Owner: {owner.name}</p>
        <p>
            <Link to={`/profile/${owner.id}`}>View {owner.name}'s Profile</Link>
        </p>
        <p>
            <Link to={"/"}>Home</Link>
        </p>
        </div>
    );
}

