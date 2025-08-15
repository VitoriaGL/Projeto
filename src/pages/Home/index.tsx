    import { restaurantes } from '../../data/dados' // Import corrigido
    import { RestaurantCard } from '../../components/RestaurantCard'
    import { Container, Grid } from './styles' 

    const Home = () => {
    return (
        <>
        
        <Container>
            <h1>Restaurantes</h1>
            <Grid>
            {restaurantes.map((restaurante) => ( // Corrigido para usar "restaurantes"
                <><RestaurantCard
                    key={restaurante.id}
                    restaurante={restaurante} /></>
            ))}
            </Grid>
            </Container>
            
        </>
        
    )
    }

    export default Home