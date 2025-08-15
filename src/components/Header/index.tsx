import { Container } from "./styles";
import logoefood from "../../assets/logotipo.jpg"; // Renomeei para evitar conflitos
import Header1 from "../../assets/Header1.jpg"; // Renomeei a imagem

const Header = () => {
  return (
    <Container>
      <div className="logo-container">
        <img src={logoefood } alt="Logo eFood" className="logo" />
      </div>
      <div className="header-image-container">
        <img src={Header1} alt="Cabeçalho" className="header-image" />
      </div>
    </Container>
  );
};

export default Header;
