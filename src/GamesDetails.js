import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const GamesDetails = () => {
    const { id } = useParams();
    const { data: game, error, isPending } = useFetch('https://zelda-api.apius.cc/api/games/' + id);
    const history = useHistory();

    const handleGoBack = () => {
        history.push('/')
    }

    return (
        <div>
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {game && (
                <article>
                    <h2>{game.name}</h2>
                    <p>{game.released_date}</p>
                    <p>Developer: {game.developer}</p>
                    <p>Publisher: {game.publisher}</p>
                    <p>{game.description}</p>
                    <button onClick={handleGoBack}>Go Back</button>
                </article>)
            }
        </div>
    )
}

export default GamesDetails;