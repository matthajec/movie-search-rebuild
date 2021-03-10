import Header from './components/Header'
import Trending from './components/trending/Trending'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
  content: {
    marginTop: '20px'
  }
})

function App() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Header />

      <Grid className={classes.content} container>
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          <Trending />
        </Grid>
        <Grid item xs={1} md={2} />
      </Grid>
    </React.Fragment>
  );
}

export default App;
