import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PlanetCarousel from "./components/PlanetCarousel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<PlanetCarousel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
