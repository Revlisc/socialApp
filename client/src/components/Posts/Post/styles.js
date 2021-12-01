import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
  postHeader: {
    borderRadius: 15,
    margin: '10px 0',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    // color: 'red',
  },
  postHeaderItem: {
    paddingLeft: '10px',
    display: 'block',
    flexDirection: 'column',
  },
  textContent: {

  },
  edit: {
    justifyContent: 'end',
    alignItems: 'center',
    color: 'black',
  },
  hashtags: {
    paddingLeft: '15px',
  },
  postItem: {
    margin: '0',
    borderRadius: '1rem',
  },
  postItemContainer: {
    marginLeft: '1.5rem',
    marginTop: '1rem',
    marginRight: '1.5rem',
  },
  actionBtn: {
    color: '#5A4AE3',
  }
}));