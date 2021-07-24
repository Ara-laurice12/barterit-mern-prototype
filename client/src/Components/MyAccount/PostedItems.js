import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import shoesImg from '../../Images/shoes-image.jpg'

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'normal',
  },
  container: {
    //border: 'solid 1px #bbb',
    width: '100%',
  },
  cardContent: {
    padding: theme.spacing(1),
  }
}));

const PostedItems = () => {
  const classes = useStyles();

  return (  
    <>
      <Typography
        color="primary"
        variant="h6"
        className={classes.title}
        gutterBottom
      >
        Your items in Marketplace
      </Typography>
      <Grid container className={classes.container}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Grid>
      {/* {<Typography
        style={{textAlign:'center', width: '100%'}}
      >
        You do not have any posted items in Marketplace.
      </Typography>} */}
    </>
  );
}
 
function PostCard() {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={4} lg={3}>
      <Card style={{margin:5}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="180"
            image={shoesImg}
            //style={{objectFit: 'fill'}}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" component="h3" style={{fontSize: '.9rem' }}>
              Test Title
            </Typography>
            <Typography variant="h6" component="p" style={{fontSize: '.8rem',}}>
              Posted: January 12, 2021
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default PostedItems;