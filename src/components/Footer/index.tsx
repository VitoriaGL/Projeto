    import React from "react";
    import { Container, Logo, SocialLinks, SocialIcon, Text } from "./styles";
    import logoefood from "../../assets/logotipo.jpg"; // ajuste o caminho
    import instagram from "../../assets/instagram.jpg";
    import facebook from "../../assets/Facebook.jpg";
    import twitter from "../../assets/twitter.jpg";

    const Footer: React.FC = () => {
    return (
        <Container>
        <Logo src={logoefood} alt="efood" />
        <SocialLinks>
            <SocialIcon src={instagram} alt="Instagram" />
            <SocialIcon src={facebook} alt="Facebook" />
            <SocialIcon src={twitter} alt="Twitter" />
        </SocialLinks>
        <Text>
            O efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
        </Text>
        </Container>
    );
    };

    export default Footer;
