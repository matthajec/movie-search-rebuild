import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typograpgy from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { TransitionProps } from '@material-ui/core/transitions';
import Slide from '@material-ui/core/Slide';

type MovieCardDialogProps = {
  isOpen: boolean,
  handleClose: any,
  title: string,
  overview: string,
  imageUrl: string
}

const useStyles = makeStyles({
  heading: {
    display: 'flex',
    alignItems: 'center'
  }
})

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" timeout={4000} ref={ref} {...props} />;
});

const MovieCardDialog: React.FC<MovieCardDialogProps> = ({ isOpen, handleClose, title, overview, imageUrl }) => {
  const classes = useStyles()

  return (
    <Dialog fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar position="static">
        <Grid container>
          <Grid item xs={1} md={2}>
            <IconButton onClick={handleClose} color="inherit">
              <CloseIcon />
            </IconButton>
          </Grid>

          <Grid item xs={10} md={8} className={classes.heading}>
            <Typograpgy variant="h5">
              {title}
            </Typograpgy>
          </Grid>
          <Grid item xs={1} md={2} />
        </Grid>
      </AppBar>

      <Grid container>
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          <img src={imageUrl} alt="test/temporary" />
          <Typograpgy>
            {overview}
          </Typograpgy>
        </Grid>
        <Grid item xs={1} md={2} />
      </Grid>
    </Dialog>
  )
}

export default MovieCardDialog