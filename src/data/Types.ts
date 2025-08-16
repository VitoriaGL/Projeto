    // Tipo para cada produto do cardápio
    export interface ProdutoType {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    foto: string;
    porcao: string;
    }

    // Tipo para o restaurante, incluindo o cardápio
    export interface RestauranteType {
    id: number;
    titulo: string;
    destaque: string;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: ProdutoType[]; // Referência ao array de produtos
    }
