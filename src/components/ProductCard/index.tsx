    import { useState } from "react";
    import { Card, ImageContainer, Info, ButtonComprar } from "./styles";
    import Modal from "../ProductModal";

    interface ProductProps {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    }

    const ProductCard = ({  nome, descricao, preco, imagem }: ProductProps) => {
    const [modalAberta, setModalAberta] = useState(false);

    return (
        <>
        <Card>
            <ImageContainer>
            <img src={imagem} alt={nome} />
            </ImageContainer>
            <Info>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <span>R$ {preco.toFixed(2)}</span>
            </Info>
            <ButtonComprar onClick={() => setModalAberta(true)}>
            Comprar
            </ButtonComprar>
        </Card>

        {modalAberta && (
            <Modal
            imagem={imagem}
            nome={nome}
            descricao={descricao}
            preco={preco}
            onClose={() => setModalAberta(false)}
            />
        )}
        </>
    );
    };

    export default ProductCard;
