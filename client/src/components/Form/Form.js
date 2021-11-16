import React, {useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'
import { useSelector } from 'react-redux'
import FileBase from 'react-file-base64';
import useStyles from './styles'
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Form = ({ currentId, setCurrentId }) => {
    
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch()
    const [postData, setPostData] = useState({
        message:'',
        tags: '',
        file: '',
    })
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId) {
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name}))
        } else {
            dispatch(createPost({...postData, name: user?.result?.name }))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({message: '', tags: '', file: ''})
    }

    if(!user?.result?.name) {
        return (
            <Paper >
                <Typography variant='h6' align='center'>
                    Please sign in to create and like posts.
                </Typography>
            </Paper>
        )
    }
    return (
        <Paper className={classes.form}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit} >
                <TextField
                    name='message'
                    variant='outlined'
                    label={`What do you want to share?`}
                    multiline
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({...postData, message: e.target.value})}
                >
                </TextField>
                <TextField
                    name='tags'
                    variant='outlined'
                    label='Hashtags'
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}
                ></TextField>
                <ImageSearchIcon />
                <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, file: base64 })} /></div>
                <Button variant='contained' size='small' type='submit' color='info'><AddCircleIcon /></Button>
                <Button variant='contained' size='small' onClick={clear} color='secondary'>Cancel</Button>
            </form>
        </Paper>
    )
}

export default Form
