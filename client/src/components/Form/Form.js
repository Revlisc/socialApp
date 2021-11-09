import React, {useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'
import { useSelector } from 'react-redux'


const Form = ({ currentId, setCurrentId }) => {
    
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch()
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message:'',
        tags: '',
    })

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])
    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({creator: '', title: '', message: '', tags: ''})
    }
    return (
        <Paper >
            <form autoComplete='off' noValidate onSubmit={handleSubmit} >
                <Typography variant='h6'>{currentId ? 'Edit' : 'New'} Post</Typography>
                <TextField
                    name='creator'
                    variant='outlined'
                    label='Creator'
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({...postData, creator: e.target.value})}
                >
                </TextField>
                <TextField
                    name='title'
                    variant='outlined'
                    label='Title'
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                >
                </TextField>
                <TextField
                    name='message'
                    variant='outlined'
                    label='Message'
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({...postData, message: e.target.value})}
                >
                </TextField>
                <TextField
                    name='tags'
                    variant='outlined'
                    label='Tags'
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}
                ></TextField>
                <Button variant='contained' size='large' type='submit' color='primary'>Post</Button>
                <Button variant='contained' size='small' onClick={clear} color='secondary'>Undo</Button>
            </form>
        </Paper>
    )
}

export default Form
