import HomeComponent from "./Components/Pages/HomeComponent";
import ClassesComponent from "./Components/Pages/ClassesComponent";
import ProfileComponent from "./Components/Pages/ProfileComponent";
import GamesComponent from "./Components/Pages/GamesComponent";
import OthelloComponent from "./Components/GamesPageComponents/OthelloComponent"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return  (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/classes" element={<ClassesComponent />} />
              <Route path="/profile" element={<ProfileComponent />} />
              <Route path="/games" element={<GamesComponent />} />
              <Route path="/othello" element={<OthelloComponent />} />
            </Routes>
          </BrowserRouter>
          );
}

export default App;
