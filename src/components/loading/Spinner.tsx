import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px'
  }
})

function Spinner() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <CircularProgress size={70} />
    </Box>
  )
}

export default Spinner