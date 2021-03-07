import Heading from './Heading'
import MovieCardGroup from '../card/MovieCardGroup'
import React from 'react'

const dummyData = [
  {
    imgSrc: 'https://dummyimage.com/300x300.png',
    title: 'Dummy1',
    imgAltText: 'Dummy1'
  },
  {
    imgSrc: 'https://dummyimage.com/300x300.png',
    title: 'Dummy2',
    imgAltText: 'Dummy2'
  },
  {
    imgSrc: 'https://dummyimage.com/300x300.pngi',
    title: 'Dummy3',
    imgAltText: 'Dummy3'
  },
  {
    imgSrc: 'https://dummyimage.com/300x300.png',
    title: 'Dummy4',
    imgAltText: 'Dummy4'
  }
]

function Trending() {
  return (
    <React.Fragment>
      <Heading>Trending this week</Heading>
      <MovieCardGroup movies={dummyData} />
    </React.Fragment>
  )
}

export default Trending