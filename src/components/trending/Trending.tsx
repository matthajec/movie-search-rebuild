import Heading from './Heading'
import MovieCardGroup from '../card/MovieCardGroup'
import React, { useEffect, useState } from 'react'
import http from '../../util/http'
import { IAPIData } from '../../interfaces'

function Trending() {
  const [data, setData] = useState<IAPIData>()

  useEffect(() => {
    http<IAPIData>('https://tmdb-proxy-api.herokuapp.com/trending')
      .then(data => setData(data))
  }, [])


  return (
    <React.Fragment>
      <Heading>Trending this week</Heading>
      <MovieCardGroup {...data} />
    </React.Fragment>
  )
}

export default Trending