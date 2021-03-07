import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

type MovieCardProps = {
  imgSrc: string,
  title: string,
  imgAltText: string
}

const MovieCard: React.FC<MovieCardProps> = ({ imgSrc, title, imgAltText }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={imgAltText}
        height="200"
        image={imgSrc}
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