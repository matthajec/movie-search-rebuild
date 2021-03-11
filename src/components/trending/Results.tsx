import Heading from './Heading'
import MovieCardGroup from '../card/MovieCardGroup'
import React, { useEffect, useState } from 'react'
import http from '../../util/http'
import { IAPIData } from '../../interfaces'
import LoadingSpinner from '../loading/Spinner'

interface IResultsProps {
  url: string,
  setUrl: Function,
  query: string
}

const Results: React.FC<IResultsProps> = ({ url, setUrl, query }) => {
  const [data, setData] = useState<IAPIData>()
  const [loadingState, setLoadingState] = useState<string>('loading')

  useEffect(() => {
    setLoadingState('loading')
    http<IAPIData>(url)
      .then(data => {
        setData(data)
        setLoadingState('loaded')
      })
      .catch(err => {
        console.log(err)
        setLoadingState('failed')
      })
  }, [url])

  const incrementPage = () => {
    if (data?.page && data?.total_pages) {
      if (data.page < data.total_pages)
        setUrl((oldUrl: string) => {
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
        setUrl((oldUrl: string) => {
          let newUrl: string = oldUrl.split('page=')[0] // get the root of the old url without the page info
          let newPage: number = parseInt(oldUrl.split('page=')[1]) - 1 // get the page number and subtract one
          newUrl = newUrl + 'page=' + newPage // combine the url root with the page number
          return newUrl // return this new url
        })
    }
  }

  const headingMessage: string = query ? `Results for: ${query}` : 'Trending this week'

  if (loadingState === 'loading') {
    return <LoadingSpinner />
  } else if (loadingState === 'loaded') {
    return (
      <React.Fragment>
        <Heading
          page={data?.page}
          totalPages={data?.total_pages}
          increment={incrementPage}
          decrement={decrementPage}
        >{headingMessage}</Heading>
        <MovieCardGroup {...data} />
      </React.Fragment>
    )
  } else {
    return <h1>An error occured, please reload.</h1>
  }
}

export default Results