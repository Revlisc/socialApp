import React, {useState} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'

const Form = () => {
    
    const dispatch = useDispatch()
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message:'',
        tags: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(postData))
    }

    const clear = () => {

    }
    return (
        <Paper >
            <form autoComplete='off' noValidate onSubmit={handleSubmit} >
                <Typography variant='h6'>New Post</Typography>
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
                    onChange={(e) => setPostData({...postData, tags: e.target.value})}
                ></TextField>
                <Button variant='contained' size='large' type='submit' color='primary'>Post</Button>
                <Button variant='contained' size='small' onClick={clear} color='secondary'>Undo</Button>
            </form>
        </Paper>
    )
}

export default Form
