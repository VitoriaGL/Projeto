    import React from "react";
    import { useParams } from "react-router-dom";
    import ProductCard from "../../components/ProductCard";
    import { restaurantes } from "../../data/dados";
    import { RestauranteType } from "../../data/Types";

    const Perfil: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const restauranteId = Number(id);

    const restaurante: RestauranteType | undefined = restaurantes.find(
        (r) => r.id === restauranteId
    );

    if (!restaurante) return <p>Desculpe, restaurante não encontrado 😔</p>;

    return (
        <div style={{ padding: "20px" }}>
        <h1>{restaurante.titulo}</h1>
        <img
            src={restaurante.capa}
            alt={restaurante.titulo}
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover", marginBottom: "30px" }}
        />
        <div
            style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
            }}
        >
            {restaurante.cardapio.map((produto) => (
            <div style={{ flex: "0 1 calc(33.333% - 40px)" }} key={produto.id}>
                <ProductCard
                key={produto.id}
                id={produto.id}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                imagem={produto.foto}
                    />
                    </div>
            ))}
        </div>
        </div>
    );
    };

    export default Perfil;
