import { Grid } from '@material-ui/core'
import React from 'react'
import MovieCard from './MovieCard'

type MovieCardGroupProps = {
  movies: {
    imgSrc: string,
    title: string,
    imgAltText: string
  }[]
}


const MovieCardGroup: React.FC<MovieCardGroupProps> = ({ movies }) => {

  const components = movies.map((movieData, index) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
      <MovieCard {...movieData} />
    </Grid>
  ))

  return (
    <Grid container spacing={3}>
      {components}
    </Grid>
  )
}

export default MovieCardGroup