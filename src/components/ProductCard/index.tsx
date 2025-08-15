    import { Card, Info, ImageContainer } from "./styles";

    interface ProductProps {
    nome: string;
    descricao: string;
    preco: string;
    imagem: string;
    }

    const ProductCard = ({ nome, descricao, preco, imagem }: ProductProps) => {
    return (
        <Card>
        <ImageContainer>
            <img src={imagem} alt={nome} />
        </ImageContainer>
        <Info>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <span>{preco}</span>
        </Info>
        </Card>
    );
    };

    export default ProductCard;
