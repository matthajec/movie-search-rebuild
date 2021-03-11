import Heading from './Heading'
import MovieCardGroup from '../card/MovieCardGroup'
import React, { useEffect, useState } from 'react'
import http from '../../util/http'
import { IAPIData } from '../../interfaces'

function Results() {
  const [data, setData] = useState<IAPIData>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('https://tmdb-proxy-api.herokuapp.com/trending&page=1')

  useEffect(() => {
    console.log(url)
    setIsLoading(true)
    http<IAPIData>(url)
      .then(data => {
        setData(data)
        setIsLoading(false)
      })
  }, [url])

  const incrementPage = () => {
    if (data?.page && data?.total_pages) {
      if (data.page < data.total_pages)
        setUrl(oldUrl => {
          let newUrl: string = oldUrl.split('page=')[0] // get the root of the old url without the page info
          let newPage: number = parseInt(oldUrl.split('page=')[1]) + 1 // get the page number and add one
          newUrl = newUrl + 'page=' + newPage // combine the url root with the page number
          return newUrl // return this new url
        })
    }

  }

  const decrementPage = () => {
    if (data?.page && data?.total_pages) {
      if (data.page > 1)
        setUrl(oldUrl => {
          let newUrl: string = oldUrl.split('page=')[0] // get the root of the old url without the page info
          let newPage: number = parseInt(oldUrl.split('page=')[1]) - 1 // get the page number and subtract one
          newUrl = newUrl + 'page=' + newPage // combine the url root with the page number
          return newUrl // return this new url
        })
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <React.Fragment>
        <Heading
          page={data?.page}
          totalPages={data?.total_pages}
          increment={incrementPage}
          decrement={decrementPage}
        >Trending this week</Heading>
        <MovieCardGroup {...data} />
      </React.Fragment>
    )
  }
}

export default Results