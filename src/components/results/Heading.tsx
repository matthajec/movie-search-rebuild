import { Typography, Box, ButtonGroup, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

type HeadingProps = {
  children: string,
  page?: number,
  totalPages?: number,
  increment: Function,
  decrement: Function,
  openModal: any
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '2.1rem',
  },
  filtersBtn: {
    marginLeft: '15px'
  },
  pageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageText: {
    marginRight: '15px'
  }
})

const Title: React.FC<HeadingProps> = ({ children, page, totalPages, increment, decrement, openModal }) => {
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
        <Button className={classes.filtersBtn} onClick={openModal} color="primary" variant="outlined">Filters</Button>
      </Box>
    </Box>
  )
}
export default Title