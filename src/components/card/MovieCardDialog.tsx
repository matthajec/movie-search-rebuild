import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { TransitionProps } from '@material-ui/core/transitions';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Rating from '@material-ui/lab/Rating'

type MovieCardDialogProps = {
  isOpen: boolean,
  handleClose: any,
  title: string,
  overview: string,
  imageUrl: string,
  posterUrl: string | undefined,
  vote_average: number,
  isRated: boolean,
  release_date: string
}

const useStyles = makeStyles({
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    marginTop: '40px',
    width: '100%',
    borderRadius: '20px'
  },
  unratedText: {
    lineHeight: '24px',
    fontSize: '18px',
  },
})

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" timeout={4000} ref={ref} {...props} />;
});

const MovieCardDialog: React.FC<MovieCardDialogProps> = ({ isOpen, handleClose, title, overview, imageUrl, posterUrl, isRated, vote_average, release_date }) => {
  const classes = useStyles()

  return (
    <Dialog fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleClose} color="inherit">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid container>
        <Grid item xs={1} md={3} />
        <Grid item xs={10} md={6}>
          <a target="_blank" rel="noreferrer" href={imageUrl}>
            <img className={classes.img} src={imageUrl} alt={title} />
          </a>
          {posterUrl && <a target="_blank" rel="noreferrer" href={posterUrl}>Click to see movie poster</a>}
          <Typography variant="h4">
            {title}
          </Typography>
          {
            isRated ?
              <Rating value={vote_average / 2} precision={0.1} readOnly /> :
              <Typography className={classes.unratedText}>Unrated</Typography>
          }
          <Typography>
            Released: <strong>{release_date.split('-').join('/')}</strong>
          </Typography>
          <Typography>
            {overview}
          </Typography>
        </Grid>
        <Grid item xs={1} md={3} />
      </Grid>
    </Dialog>
  )
}

export default MovieCardDialog