import { Typography, Box, ButtonGroup, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

type HeadingProps = {
  children: string,
  page?: number,
  totalPages?: number,
  increment: Function,
  decrement: Function,
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: '10px',
    textAlign: 'center'
  },
  pageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageText: {
    marginRight: '15px'
  }
}))

const Title: React.FC<HeadingProps> = ({ children, page, totalPages, increment, decrement }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography className={classes.heading} color="primary" variant="h4" component="h2">
        {children}
      </Typography >
      <Box className={classes.pageContainer}>
        <Typography className={classes.pageText} color="primary">
          Page {page} / {totalPages}
        </Typography>
        <ButtonGroup color="primary" aria-label="contained primary button group">
          <Button onClick={() => decrement()}>Back</Button>
          <Button onClick={() => increment()}>Next</Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}
export default Title