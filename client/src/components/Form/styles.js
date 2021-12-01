import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
  formBox: {
      maxWidth: '540px',
      width: '80%',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      margin: '0 auto',
      marginBottom: 15,
      borderRadius: 15,
      paddingTop: '15px',
      paddingLeft: '25px',
      
      
  },
  noUserDefault: {
    maxWidth: '360px',
    width: '90%',
    marginBottom: '2.5rem',
    display: 'flex',
    alignContent: 'center',
    margin: '0 auto',
  },
  textFieldUpload: {
    borderRadius: '2.5rem',
  },
  formButtonContainer: {
    float: 'right',
    color: '#5A4AE3', 
  },
  fileBaseBtn: {
    display: 'none'
  },
  
}));