import Heading from './Heading'
import MovieCardGroup from '../card/MovieCardGroup'
import React from 'react'

const movies = [
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  },
  {
    imgSrc: 'https://dummyimage.com/500x500.png',
    title: 'Dummy 1',
    imgAltText: 'dummy image'
  }
]

function Trending() {

  return (
    <React.Fragment>
      <Heading>Trending this week</Heading>
      <MovieCardGroup movies={movies} />
    </React.Fragment>
  )
}

export default Trending