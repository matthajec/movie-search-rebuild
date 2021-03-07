import Header from './components/Header'
import Trending from './components/trending/Trending'
import { Grid } from '@material-ui/core'

function App() {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item container>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          <Trending />
        </Grid>
        <Grid item xs={1} md={2} />
      </Grid>
    </Grid>
  );
}

export default App;
