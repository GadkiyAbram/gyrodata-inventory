import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1200,
  },
  tableContainer: {
    borderRadius: 5
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: '#cf3213',
    color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
    color: theme.palette.getContrastText(theme.palette.primary.light),
    background: '#f00',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '25px',
  },
  name: {
    fontWeight: 'bold',
    color: '#4a4847'
  },
  status: {
    fontWeight: 'bold',
    fontSize: '0.75rem',
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: '3px 10px',
    display: 'inline-block'
  },
  container: {
    color: 'textSecondary',
    margin: '0px 5px'
  }
}));

export default useStyles;