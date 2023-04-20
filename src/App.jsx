import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PlanetCarousel from "./components/PlanetCarousel";
import Planet from "./components/Planet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<PlanetCarousel />} />
          <Route path="/:planet" element={<Planet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
