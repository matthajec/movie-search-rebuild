import { Grid } from '@material-ui/core'
import React from 'react'
import MovieCard from './MovieCard'
import { IAPIData } from '../../interfaces'

const MovieCardGroup: React.FC<IAPIData> = ({ results }) => {
  let components;

  if (results !== undefined) {
    components = results.map((movieData, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <MovieCard {...movieData} />
      </Grid>
    ))
  }

  return (
    <Grid container spacing={3}>
      {components}
    </Grid>
  )
}

export default MovieCardGroup