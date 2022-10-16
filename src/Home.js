import useFetch from './useFetch';
import Games from './Games';
import { useState } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Home = () => {
    const { data: games, isPending, error } = useFetch('https://zelda-api.apius.cc/api/games');
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState([]);
    const [searching, setSearching] = useState(false);

    const searchGame = (e) => {
       e.preventDefault();

       let filtered = games.filter(el => el.name.includes(searchValue));
       setFilterValue(filtered);
       if (filterValue) {
           setSearching(true);
       } else {
           setSearching(false);
       }
    }

    const useStyles = makeStyles((theme) => ({
        icon: {
          marginRight: theme.spacing(2),
        },
        textColor: {
          color:'white'  
        },
        message: {
            color:'white',  
            margin: '0 auto',
            textAlign: 'center'
        },
        searchInput: {
            width: '50%',
            height: '30px'
        },
        heroContent: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
          marginTop: theme.spacing(4),
        },
        cardGrid: {
          paddingTop: theme.spacing(8),
          paddingBottom: theme.spacing(8),
        },
        card: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
        cardMedia: {
          paddingTop: '56.25%', // 16:9
        },
        cardContent: {
          flexGrow: 1,
        },
        footer: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(6),
        },
        searchForm: {
            paddingBottom: theme.spacing(2),
        },
        searchButton:  {
            marginLeft: theme.spacing(1),
            marginTop: theme.spacing(0.2)
        }
      }));

      const classes = useStyles();
    return (
        /*
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
        */
        <main>
        <Container className={classes.cardGrid} maxWidth="xlg">
            {error && <h2 className={classes.message}>Error, could not get data</h2>}
            {isPending && <h1 className={classes.message}>Loading...</h1>}
            {games && 
                <form className={classes.searchForm} onSubmit={searchGame}>
                    <input type="text" 
                        value={searchValue} 
                        className={classes.searchInput}  
                        placeholder="Search By Game Title"
                        onChange={(e) => setSearchValue(e.target.value)}    
                    />
                    <Button className={classes.searchButton} type="submit" variant="contained" color="primary">
                        Search
                    </Button>
                </form>
                
            }   
          {searching && filterValue.length === 0  && <h2 className={classes.textColor}>No results, please try again.</h2>}
          <Grid container spacing={6}>
            {games && !searching && <Games games={games} />}
            {filterValue && <Games games={filterValue} />}
          </Grid>
        </Container>
      </main>
    );
}

export default Home;