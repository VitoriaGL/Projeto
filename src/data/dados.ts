import restaurante1 from '../assets/restaurante1.jpg'    
import restaurante2 from '../assets/restaurante2.jpg'
import restaurante3 from '../assets/restaurante3.jpg'
import restaurante4 from '../assets/restaurante4.jpg'
import restaurante6 from '../assets/restaurante6.jpg'
import restaurante5 from '../assets/restaurante5.jpg'
import { bellavilla }  from   '../data/restaurantes/bella_villa'
import { RestauranteType } from './Types'
import { tratoria } from './restaurantes/tratoria'
import { doce } from './restaurantes/doce'
import { brasileiro } from './restaurantes/brasileiro'  
import { hokaido } from './restaurantes/hokaido'
import { lavilla } from './restaurantes/la_villa'


    export const restaurantes: RestauranteType[] = [
    {
        id: 1,
        titulo: "Bella Villa",
        destaque: "Destaque da semana",
        tipo: "Italiana",
        avaliacao: 4.9,
        descricao:
        "Peça já o melhor da culinária italiana com peixes frescos e massas, receitas exclusivas.",
        capa: restaurante1,
        cardapio: bellavilla
    },
    {
        id: 2,
        titulo: "La Dolce Vita Trattoria",
        destaque: "Promoção",
        tipo: "Italiana",
        avaliacao: 4.7,
        descricao: "A verdadeira experiência italiana com massas artesanais e molhos caseiros.",
        capa: restaurante2,
        cardapio: tratoria
    },
    {
        id: 3,
        titulo: "La Dolce Vita",
        destaque: "Promoção",
        tipo: "Italiana",
        avaliacao: 4.7,
        descricao: "A verdadeira experiência italiana com massas artesanais e molhos caseiros.",
        capa: restaurante3,
        cardapio: doce
    },
    {
        id: 4,
        titulo: "Brasileirinho",
        destaque: "Promoção",
        tipo: "Brasileira",
        avaliacao: 4.7,
        descricao: "os melhores petiscos de todo o Brasil, sabores divresos e apaixonantes.",
        capa: restaurante4,
        cardapio: brasileiro
    },
    {
        id: 6,
        titulo: "Hokaido",
        destaque: "Promoção",
        tipo: "Japonesa",
        avaliacao: 4.7,
        descricao: "Os melhores pratos da culinarioa biponica você encontra aqui .",
        capa: restaurante5,
        cardapio: hokaido
    },
    
        {
            id: 5,
            titulo: "La Villa",
            destaque: "Promoção",
            tipo: "Francesa",
            avaliacao: 4.7,
            descricao: "Nossa comida e atendimento é estritamente Parisiense.",
            capa: restaurante6,
            cardapio: lavilla
        }
    
    ];
