    import styled from "styled-components";

    export const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    width: 60%; // Largura do card (50% do container pai)
    margin: 0 auto; // Centraliza horizontalmente
    display: flex;
    flex-direction: column; // Empilha os elementos verticalmente
    height: 60%; // Altura fixa do card (ajuste conforme necessário)
    `;

    export const ImageContainer = styled.div`
    height: 100%; // 60% do card para a imagem
    overflow: hidden;

    img {
        width: 100%;
        height: 80%; // Ocupa todo o espaço do container
        object-fit: cover; // Preenche o espaço mantendo proporção
        display: block;
    }
    `;

    export const Info = styled.div`
    height: 40%; // 40% do card para o texto
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center; // Centraliza verticalmente o conteúdo
    align-items: center; // Centraliza horizontalmente
    text-align: center;

    h3 {
        margin: 0 0 12px;
        font-size: 1.4rem;
    }

    p {
        color: #777;
        margin: 0 0 12px;
        font-size: 1rem;
    }

    span {
        font-weight: bold;
        color: #000;
        font-size: 1.2rem;
    }
    `;
