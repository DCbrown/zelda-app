import useFetch from './useFetch';
import Games from './Games';
import { useState } from "react";

const Home = () => {
    const { data: games, isPending, error } = useFetch('https://zelda-api.apius.cc/api/games');
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState([]);
    const [searching, setSearching] = useState(false);

    const searchGame = (e) => {
       e.preventDefault();

       let filtered = games.filter(el => el.name.includes(searchValue));
       console.log('name', searchValue);
       // console.log('results', filtered);
       setFilterValue(filtered);
       // console.log(filterValue.length);
       if (filterValue) {
           setSearching(true);
       } else {
           setSearching(false);
       }
    }

    return (
        <div>
            {error && <div>Error, could not get data</div>}
            {isPending && <div>Loading...</div>}
            {games && 
                <form onSubmit={searchGame}>
                    <input type="text" 
                           value={searchValue} 
                           placeholder="Search By Name"
                           onChange={(e) => setSearchValue(e.target.value)}    
                           />
                    <button type="submit">Search Game</button>
                </form>
             }
            {games && !searching && <Games games={games} />}
            {filterValue && <Games games={filterValue} />}
            {searching && filterValue.length === 0  && <div>No results, please try again.</div>}

        </div>

    );
}

export default Home;