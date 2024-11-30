import HomeComponent from "./Components/Pages/HomeComponent";
import ClassesComponent from "./Components/Pages/ClassesComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return  (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/classes" element={<ClassesComponent />} />
            </Routes>
          </BrowserRouter>
          );
}

export default App;
