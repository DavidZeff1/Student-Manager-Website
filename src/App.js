import HomeComponent from "./Components/Pages/HomeComponent";
import ClassesComponent from "./Components/Pages/ClassesComponent";
import ProfileComponent from "./Components/Pages/ProfileComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return  (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/classes" element={<ClassesComponent />} />
              <Route path="/profile" element={<ProfileComponent />} />
            </Routes>
          </BrowserRouter>
          );
}

export default App;
