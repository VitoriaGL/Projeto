import restaurante1 from '../assets/restaurante1.jpg'    
import restaurante2 from '../assets/restaurante2.jpg'
import restaurante3 from '../assets/restaurante3.jpg'
import restaurante4 from '../assets/restaurante4.jpg'
import restaurante6 from '../assets/restaurante6.jpg'
import restaurante5 from '../assets/restaurante5.jpg'

export interface RestauranteType {
    id: number;
    titulo: string;
    destaque: string;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    }

    export const restaurantes: RestauranteType[] = [
    {
        id: 1,
        titulo: "Bella Villa",
        destaque: "Destaque da semana",
        tipo: "Italiana",
        avaliacao: 4.9,
        descricao:
        "Peça já o melhor da culinária italiana com peixes frescos e massas, receitas exclusivas.",
        capa: restaurante1
    },
    {
        id: 2,
        titulo: "La Dolce Vita Trattoria",
        destaque: "Promoção",
        tipo: "Italiana",
        avaliacao: 4.7,
        descricao:
        "A verdadeira experiência italiana com massas artesanais e molhos caseiros.",
        capa: restaurante2
        },
    {
        id:3 ,
        titulo: "La Dolce Vita",
        destaque: "Promoção",
        tipo: "Italiana",
        avaliacao: 4.7,
        descricao:
        "A verdadeira experiência italiana com massas artesanais e molhos caseiros.",
        capa: restaurante3
        },
    {
        id: 4,
        titulo: "Brasileirinho",
        destaque: "Promoção",
        tipo: "Brasileira",
        avaliacao: 4.7,
        descricao:
        "os melhores petiscos de todo o Brasil, sabores divresos e apaixonantes.",
        capa: restaurante4

        },
    {
        id: 6,
        titulo: "Hokaido",
        destaque: "Promoção",
        tipo: "Japonesa",
        avaliacao: 4.7,
        descricao:
        "Os melhores pratos da culinarioa biponica você encontra aqui .",
        capa: restaurante6
        },
    
        {
        id: 5,
        titulo: "La Villa",
        destaque: "Promoção",
        tipo: "Francesa",
        avaliacao: 4.7,
        descricao:
        "Nossa comida e atendimento é estritamente Parisiense.",
        capa: restaurante5
        },
    
    ];
