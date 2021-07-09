import { Link } from 'react-router-dom';

const Games = ({ games }) => {
    return (
        <div className="">
            {games.map((game) => (
                <div key={game._id}>
                    <Link to={`/games/${game._id}`}>
                        <p>{game.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Games;