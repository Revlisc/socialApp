import React, {useState, useEffect} from 'react'
import { Container, AppBar, Typography, TextField, Toolbar, Avatar, Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
import decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import useStyles from './styles'
import ChipInput from 'material-ui-chip-input'
import {getPostsBySearch} from '../../actions/posts'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}
const Navbar = () => {
    //Contains a logo/home link, timeline, your account/popular?/sign in
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [search, setSearch] = useState('')
    const [tags, setTags] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const query = useQuery()
    //const page = query.get('page') 
    const searchQuery = query.get('searchQuery')

    useEffect(() => {
        const token = user?.token

        if(token) {
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()) {
                logout()
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const searchPost = () => {
        if (search.trim() || tags) {
          dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
          navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
          navigate('/');
        }
      };
    const logout = () => {
        dispatch({ type: 'LOGOUT'})

        navigate('/')
        setUser(null)
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            searchPost()
        }
    }

    const handleAdd = (tag) => {
        setTags([...tags, tag])
    }

    const handleDelete = (tagsToDelete) => {
        setTags(tags.filter((hashtag) => hashtag !== tagsToDelete))
    }
    return (
        <Container maxwidth='xl'>
            
            <AppBar className={classes.appBar} position='static' color='inherit' >
                <div >
                    <Typography component={Link} to='/' variant='h2' align='start'>SocialApp</Typography>
                </div>
                <div>
                    <TextField 
                        name='search'
                        variant='outlined'
                        label='Search Posts'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <ChipInput 
                        style={{ margin: '10px 0'}}
                        value={tags}
                        onAdd={handleAdd}
                        onDelete={handleDelete}
                        label='Search tags'
                        variant='outlined'
                    />
                    <Button onClick={searchPost} color='primary'>Search</Button>
                </div>
                <Toolbar >
                    {user ? (
                        <div> 
                            <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography variant='h6'>{user.result.name}</Typography>
                            <Button variant='contained' color='secondary' onClick={logout}>Logout</Button>
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
