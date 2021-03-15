import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '60px',
    flexDirection: 'column'
  },
  text: {
    marginTop: '60px'
  }
})

const Spinner: React.FC<{ initial: boolean }> = ({ initial }) => {
  const classes = useStyles()
  console.log(initial)

  return (
    <Box className={classes.root}>
      <CircularProgress size={70} />
      {initial &&
        <Typography className={classes.text}>
          Initial load times may take a while as the server starts up
        </Typography>
      }
    </Box>
  )
}

export default Spinner