import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const GamesDetails = () => {
    const { id } = useParams();
    // const { data: game, error, isPending } = useFetch('http://zelda-api.apius.cc/api/games/' + id);
    const { isLoading, serverError, apiData } = useFetch(
        "https://zelda.fanapis.com/api/games/" + id
      );
    const history = useHistory();

    const handleGoBack = () => {
        history.push('/')
    }

    const useStyles = makeStyles((theme) => ({
    textColor: {
        color:'white'  
    },
    message: {
        color:'white',  
        margin: '0 auto',
        textAlign: 'center'
    },
      mainFeaturedPost: {
        position: 'relative',
        background: 'linear-gradient(0deg, rgba(154,255,176,1) 0%,rgba(158,218,173,1) 95%)',
        borderTopLeftRadius: "0px",
        borderTop: "20px double rgba(0, 0, 0, 1)",
        borderTopRightRadius: "0px",
        borderBottom: "20px double rgba(0, 0, 0, 1)",
        borderBottomRightRadius: "0px",
        borderLeft: "20px double rgba(0, 0, 0, 1)",
        borderBottomLeftRadius: "0px",
        borderRight: "20px double rgba(0, 0, 0, 1)",
        marginBottom: theme.spacing(4),
        margin: theme.spacing(4),
        padding: theme.spacing(4)
      },  
    }));

    const classes = useStyles();
    return (
        <div>
            {serverError && <h2 className={classes.message}>Error, could not get data</h2>}
            {isLoading && <h1 className={classes.message}>Loading...</h1>}
            {apiData && (
                
                <Paper className={classes.mainFeaturedPost}>
                {/* Increase the priority of the hero background image */}
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={12}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        {apiData.name}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                        Developer: {apiData.developer}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                        Publisher: {apiData.publisher}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                        Release Date: {apiData.released_date}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                        {apiData.description}
                        </Typography>
                        <Button onClick={handleGoBack} variant="contained" size="medium" color="default" >
                            Go Back
                        </Button>
                    </div>
                    </Grid>
                </Grid>
                </Paper>
                )
            }
        </div>
    )
}

export default GamesDetails;