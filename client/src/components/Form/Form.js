import React, {useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'
import { useSelector } from 'react-redux'
import FileBase from 'react-file-base64';
import useStyles from './styles'

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import CloseIcon from '@material-ui/icons/Close'

const Form = ({ currentId, setCurrentId }) => {
    
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch()
    const [postData, setPostData] = useState({
        message:'',
        tags: '',
        file: '',
    })
    const [addPhoto, setAddPhoto] = useState(false)
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

    const photoButton = () => {
        setAddPhoto((set) => !set)
    }

    if(!user?.result?.name) {
        return (
            <Paper className={classes.noUserDefault}>
                <Typography variant='h6' align='center'>
                    Please sign in to create and like posts.
                </Typography>
            </Paper>
        )
    }
    return (
        <Paper className={classes.formBox}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit} >
                <TextField
                    name='message'
                    variant='outlined'
                    label={`What do you want to share, ${user.result.name.split(' ')[0]}?`}
                    className={classes.textFieldUpload}
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
                    className={classes.textFieldUpload}
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}
                ></TextField>
                
                {addPhoto ? (
                    <div>
                        <FileBase className={classes.fileBaseBtn} type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, file: base64 })} ><AddAPhotoIcon style={{color: '#5A4AE3'}}/></FileBase >
                    </div>
                ) : (
                    <Button onClick={photoButton}>
                        <AddAPhotoIcon style={{color: '#5A4AE3'}}/>
                    </Button>
                )}
                <hr />
                <div >
                    <Button className={classes.formButtonContainer} size='small' type='submit' ><ArrowForwardIcon />Post</Button>
                    <Button className={classes.formButtonContainer} size='small' onClick={clear} ><CloseIcon />Cancel</Button>
                </div>
            </form>
        </Paper>
    )
}

export default Form
