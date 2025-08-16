import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil"; // Corrigido: import com P maiúsculo, pois é default export

function App() {
  return (
    <Router>
      <Routes>
        {/* Todas as páginas dentro do Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="restaurante/:id" element={<Perfil />} /> {/* Corrigido: componente com P maiúsculo */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
