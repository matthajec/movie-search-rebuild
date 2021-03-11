import { Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { IAPIMovieResult } from '../../interfaces'
import Lazy from 'react-lazyload'

const useStyles = makeStyles({
  root: {
    height: '325px'
  },
  unratedText: {
    lineHeight: '24px',
    fontSize: '18px',
  }
})


const MovieCard: React.FC<IAPIMovieResult> = ({ title, backdrop_path, overview, vote_average, vote_count }) => {
  const classes = useStyles()
  const isRated: boolean = vote_count > 0
  const imageUrl: string = backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : 'https://dummyimage.com/500x500.png?text=No%20Picture%20Found'
  const description: string = overview ? overview : 'No overview found'

  return (
    <Lazy>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={imageUrl}
          title={title}
        />
        <CardContent>
          <Typography component="h3" variant="h6" noWrap>
            {title}
          </Typography>
          {
            isRated ?
              <Rating value={vote_average / 2} precision={0.1} readOnly /> :
              <Typography className={classes.unratedText}>Unrated</Typography>
          }
          <Typography noWrap>
            {description}
          </Typography>
        </CardContent>

      </Card>
    </Lazy>
  )
}

export default MovieCard