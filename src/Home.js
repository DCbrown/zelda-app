import useFetch from './useFetch';
import Games from './Games';

const Home = () => {
    const { data: games, isPending, error } = useFetch('http://zelda-api.apius.cc/api/games')
    return (
        <div>
            {error && <div>Error, could not get data</div>}
            {isPending && <div>Loading...</div>}
            {games && <Games games={games} />}
        </div>

    );
}

export default Home;