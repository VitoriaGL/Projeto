import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Layout from "./Layout"; // Importe o Layout

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}> {/* Layout envolve todas as rotas */}
          <Route path="/" element={<Home />} />
          <Route path="/restaurante/:id" element={<Perfil />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;