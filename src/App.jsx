import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DogDetail from "./DogDetail";
import dogData from "./dogData"; // Import dogData
import OwnerProfile from "./OwnerProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogdetail/:id" element={<DogDetail dogData={dogData} />} />
      <Route path="/profile/:ownerId" element={<OwnerProfile />} />
    </Routes>
  );
}

export default App;

