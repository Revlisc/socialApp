import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(248,248,252)',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoName: {
    height: '6rem',
    width: '10rem',
    color: 'rgb(125,127,197)',
    float: 'left',
  },
  navIcons: {
    display: 'inline-flex',
    alignItems: 'space-between',
    marginLeft: '25px',
    flexDirection: 'row',
    
  },
  navIcon: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '33%',
    paddingLeft: '4rem',
  }
}));