import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

type HeadingProps = {
  children: string
}

const useStyles = makeStyles({
  heading: {
    fontWeight: 'bold',
    fontSize: '2.1rem',
    marginBottom: '20px'
  }
})

const Title: React.FC<HeadingProps> = ({ children }) => {
  const classes = useStyles()

  return (
    <Typography className={classes.heading} variant="h4" component="h2">
      {children}
    </Typography >
  )
}
export default Title