import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Games = ( apiData ) => {

    const useStyles = makeStyles((theme) => ({
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
          <>
          {apiData.games.map((apiData) => (
          <Grid item key={apiData.id} xs={12} sm={6} md={4}>
          <Link style={{ textDecoration: 'none' }} to={`/games/${apiData.id}`}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.textColor} gutterBottom variant="h5" component="h2">
                {apiData.name}
              </Typography>
              <Typography className={classes.textColor} variant="h6">
                {apiData.released_date}
              </Typography>
              <Typography className={classes.textColor} variant="h6">
                {apiData.developer}
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
        ))}
        </>
      );
}

export default Games;