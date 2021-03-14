import Header from './components/Header'
import Results from './components/trending/Results'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'

const useStyles = makeStyles({
  content: {
    marginTop: '20px'
  }
})

function App() {
  const classes = useStyles()
  const [searchValue, setSearchValue] = useState<string>('')
  const [query, setQuery] = useState<string>('')
  const [url, setUrl] = useState<string>('https://tmdb-proxy-api.herokuapp.com/trending?page=1')

  const search = () => {
    setQuery(searchValue)
    setUrl('https://tmdb-proxy-api.herokuapp.com/search?query=' + encodeURI(searchValue) + '&page=1') // encode this
  }

  return (
    <React.Fragment>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        search={search}
      />

      <Grid className={classes.content} container>
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          <Results
            url={url}
            setUrl={setUrl}
            query={query}
          />
        </Grid>
        <Grid item xs={1} md={2} />
      </Grid>
    </React.Fragment>
  );
}

export default App;
