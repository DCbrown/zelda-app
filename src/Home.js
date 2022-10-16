import useFetch from './useFetch';
import Games from './Games';
import { useState } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isLoading, serverError, apiData } = useFetch(
    "https://zelda.fanapis.com/api/games"
  );
    // const { data: games, isPending, error } = useFetch('https://zelda.fanapis.com/api/games');
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState([]);
    const [searching, setSearching] = useState(false);

    if(apiData) {
      console.log(apiData);
    } else {
      console.log("No api data");
    }

    


    const searchGame = (e) => {
       e.preventDefault();
      
    if (Array.isArray(apiData)) {
    const results = apiData.filter(val => val.name.includes(searchValue));    
    setFilterValue(results);  
    console.log(results, "FOUND");
    } else {
    console.log("No games found");
    }

       /*
       let filtered = apiData.filter(el => el.games.name === searchValue);
       console.log(searchValue, "searching");
       setFilterValue(filtered);
       if (filterValue) {
           setSearching(true);
       } else {
           setSearching(false);
       }
       */
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
        },
        icon: {
          marginRight: theme.spacing(2),
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
          background: 'linear-gradient(0deg, rgba(154,255,176,1) 0%,rgba(158,218,173,1) 95%)',
          borderTopLeftRadius: "0px",
          borderTop: "20px double rgba(0, 0, 0, 1)",
          borderTopRightRadius: "0px",
          borderBottom: "20px double rgba(0, 0, 0, 1)",
          borderBottomRightRadius: "0px",
          borderLeft: "20px double rgba(0, 0, 0, 1)",
          borderBottomLeftRadius: "0px",
          borderRight: "20px double rgba(0, 0, 0, 1)",
        },
        cardMedia: {
          paddingTop: '56.25%',
        },
        cardContent: {
          flexGrow: 1,
        },
        footer: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(6),
        },
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
        <Container className={classes.cardGrid} >
            {serverError && <h2 className={classes.message}>Error, could not get data</h2>}
            {isLoading && <h1 className={classes.message}>Loading...</h1>}
            {apiData && 
                <form className={classes.searchForm} onSubmit={searchGame}>
                    <input type="text" 
                        value={searchValue} 
                        className={classes.searchInput}  
                        placeholder="Search By Title"
                        onChange={(e) => setSearchValue(e.target.value)}    
                    />
                    <Button className={classes.searchButton} type="submit" variant="contained" color="primary">
                        Search
                    </Button>
                </form>
                
            }   

          <Grid container spacing={6}>
          {searching && filterValue.length === 0  && <h2 className={classes.textColor}>No results, please try again.</h2>}
          {apiData && !searching && apiData.map((apiData) => (
            <Games games={apiData} />
          ))}
          {filterValue && filterValue.map((filter) => (
            <Games games={filter} />
          ))}
          </Grid>
        </Container>
      </main>
    );
}

export default Home;