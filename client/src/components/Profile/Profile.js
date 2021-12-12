import { TextField, Typography } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getByUser } from '../../actions/posts'
import Post from '../Posts/Post/Post'

const Profile = () => {
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
        dispatch(getByUser(user.name))
    }, [location, dispatch])
    
    const posts = useSelector((state) => state.posts)
    console.log(posts, 'b4')
    //setCurrentId={setCurrentId} className={classes.post}(user?.result?.googleId === post.creator || user?.result?._id === post.creator)
    posts.filter((post) => post.name === 'Dale Simmons')
    console.log(posts, 'after')
    return (
        <div>
            <Typography>{user?.result?.name}</Typography>

            <TextField multiline minRows={1} maxRows={8} placeholder='Add your bio' label='Bio'>

            </TextField>
            <div>
                {
                    posts.map((post) => <Post post={post} />)
                }
            </div>

        </div>
    )
}

export default Profile
