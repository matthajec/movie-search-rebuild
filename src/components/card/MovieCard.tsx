import { useState } from 'react'
import { Card, CardMedia, CardContent, Typography, Button, makeStyles } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { IAPIMovieResult } from '../../interfaces'
import Lazy from 'react-lazyload'
import ClampLines from 'react-clamp-lines'
import MovieCardDialog from './MovieCardDialog'

const useStyles = makeStyles({
  root: {
    height: '402px'
  },
  unratedText: {
    lineHeight: '24px',
    fontSize: '18px',
  },
  button: {
    marginTop: '10px'
  },
  cardContent: {
    height: '207px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})


const MovieCard: React.FC<IAPIMovieResult> = ({ title, backdrop_path, overview, vote_average, vote_count, release_date, poster_path }) => {
  const classes = useStyles()
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const isRated: boolean = vote_count > 0
  const imageUrl: string = backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : 'https://dummyimage.com/500x500.png?text=No%20Picture%20Found'
  const posterUrl: string | undefined = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : undefined
  const description: string = overview ? overview : 'No overview found'

  const handleOpen = () => {
    setIsDialogOpen(true)
  }

  const handleClose = () => {
    setIsDialogOpen(false)
  }

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
        <CardContent className={classes.cardContent}>
          <div>
            <Typography component="h3" variant="h6" noWrap>
              {title}
            </Typography>
            {
              isRated ?
                <Rating value={vote_average / 2} precision={0.1} readOnly /> :
                <Typography className={classes.unratedText}>Unrated</Typography>
            }
            <ClampLines
              text={description}
              lines={3}
              id={backdrop_path}
              buttons={false}
            />
          </div>
          <Button onClick={handleOpen} className={classes.button} color="primary" variant="outlined" >
            More Info...
          </Button>
          <MovieCardDialog
            title={title}
            overview={overview}
            isOpen={isDialogOpen}
            handleClose={handleClose}
            imageUrl={imageUrl}
            posterUrl={posterUrl}
            isRated={isRated}
            vote_average={vote_average}
            release_date={release_date}
          />
        </CardContent>
      </Card>
    </Lazy>
  )
}

export default MovieCard