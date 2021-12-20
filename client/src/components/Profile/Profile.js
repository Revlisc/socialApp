import { TextField, Typography, Button } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/posts'
import { updateBio } from '../../actions/profile'
import Post from '../Posts/Post/Post'
//import useStyles from './styles'

const Profile = () => {
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const location = useLocation()
    const dispatch = useDispatch()
    //const classes = useStyles()
    const [bio, setBio] = useState({
        bio: '',  
    })

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
        dispatch(getPosts())
    }, [location, dispatch])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateBio(user.result.name, {...bio, name: user?.result?.name}))
    }
    const posts = useSelector((state) => state.posts)
    console.log(posts, 'b4')
    //setCurrentId={setCurrentId} className={classes.post}(user?.result?.googleId === post.creator || user?.result?._id === post.creator)className={classes.post}
    posts.filter((post) => post.name === user.result.name)
    console.log(posts, 'after')
    return (
        <div>
            <Typography>{user?.result?.name}</Typography>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <TextField multiline minRows={1} maxRows={8} placeholder='Add your bio' label='Bio' value={bio.bio} onChange={(e) => setBio({...bio, bio: e.target.value})}>

                </TextField>
                <Button  size='small' type='submit' >submit</Button>
            </form>
            
            <div>
                {
                    posts.map((post, key) => (user?.result?.googleId === post.creator || user?.result?._id === post.creator) && (<Post post={post} currentId={key} />))
                }
            </div>
            <div>
                friends list - 26
            </div>
            

        </div>
    )
}

export default Profile
