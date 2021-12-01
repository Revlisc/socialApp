
import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
  postEntry: {
    borderRadius: 15,
    //width: '10rem',
    margin: '0 auto',
    //marginBottom: '25px',
    display: 'flex',
    //flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
    maxWidth: '640px',
    width: '80%',
    
  },

  post: {
    //marginBottom: '2.5rem',
    //paddingBottom: 20,
    border: '1px solid red',
    marginBottom: '25px',
  },

  line: {
    borderColor: 'rgb(90,74,227)',
  }
}));