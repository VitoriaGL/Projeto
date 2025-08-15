    import ProductCard from "../../components/ProductCard";
    import apresentacao from "../../assets/apresentacao.jpg";
    import produtoImg from "../../assets/produtos.jpg";

    const Perfil = () => {
    const produtos = [
        { nome: "", descricao: "Restaurante", preco: "$$$", imagem: produtoImg },
    ];

    return (
        <>
        <div style={{ position: "relative" }}>
            <img
            src={apresentacao}
            alt="Apresentação"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
        </div>

        <div
            style={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            flexWrap: "wrap",
            margin: "0 auto",
            justifyContent: "center",
            }}
        >
            {produtos.map((prod, index) => (
            <ProductCard key={index} {...prod} />
            ))}
        </div>
        </>
    );
    };

    export default Perfil;
