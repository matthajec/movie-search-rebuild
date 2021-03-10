import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { IAPIMovieResult } from '../../interfaces'


const MovieCard: React.FC<IAPIMovieResult> = ({ title, backdrop_path }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={title}
        height="200"
        image={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        title={title}
      />
      <CardContent>
        <Typography>
          {title}
        </Typography>
      </CardContent>

    </Card>
  )
}

export default MovieCard