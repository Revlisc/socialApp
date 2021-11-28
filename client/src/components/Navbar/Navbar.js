import React, {useState, useEffect} from 'react'
import { Container, AppBar, Typography, Toolbar, Avatar, Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
import decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import useStyles from './styles'
import Logo from '../../Images/Social-logos_transparent.png'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';


const Navbar = () => {
    //Contains a logo/home link, timeline, your account/popular?/sign in
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const token = user?.tokesn

        if(token) {
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()) {
                logout()
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
        console.log('NAVBAR USER IS', user)
    }, [location])

    const logout = () => {
        dispatch({ type: 'LOGOUT'})

        navigate('/')
        setUser(null)
    }
    return (
        <Container maxwidth='lg'>
            
            <AppBar className={classes.appBar} position='static' color='inherit' >
                <div >
                    <Typography component={Link} to='/' variant='h2'><img className={classes.logoName} src={Logo} alt='project icon' /></Typography>
                    <div className={classes.navIcons}> 
                        <GroupIcon className={classes.navIcon}/>
                        <NotificationsIcon className={classes.navIcon}/>
                        <ChatIcon className={classes.navIcon}/>
                    </div>
                </div>
                <Toolbar >
                    {user ? (
                        <div className={classes.userInfo}> 
                            <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography variant='h6'>{user.result.name}</Typography>
                            <Button onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to='/auth' variant='contained' color='primary'>Login</Button>
                    )}
                </Toolbar>
            </AppBar>
            
            
        </Container>
    )
}

export default Navbar
