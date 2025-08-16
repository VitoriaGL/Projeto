    import { Card, Image, Title, Description, Button} from "./styles";
    import { RestauranteType } from '../../data/Types';

    interface Props {
    restaurante: RestauranteType;
    }

    export function RestaurantCard({ restaurante }: Props) {
    return (
        <Card>
        <Image 
            src={restaurante.capa} 
            alt={`Imagem de ${restaurante.titulo}`} 
            loading="lazy"
        />
        <Title>{restaurante.titulo}</Title>
        <Description>{restaurante.descricao}</Description>

        {restaurante.destaque && (
            <div className="destaque-badge">{restaurante.destaque}</div>
        )}

        <div className="meta-info">
            <span className="tipo">{restaurante.tipo}</span>
            <span className="avaliacao">★ {restaurante.avaliacao.toFixed(1)}</span>
        </div>

        <Button to={`/restaurante/${restaurante.id}`} aria-label={`Ver detalhes de ${restaurante.titulo}`}>
            Ver detalhes
        </Button>
        </Card>
    );
    }