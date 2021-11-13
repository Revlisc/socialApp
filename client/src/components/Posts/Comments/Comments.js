import React, { useState, useRef } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { addComment } from '../../../actions/posts'

const Comments = ({post}) => {
    
    const [comments, setComments] = useState(post?.comments)
    const [comment, setComment] = useState('')
    const user = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch()
    const commentRef = useRef()

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`
        const newComments = await dispatch(addComment(finalComment, post._id))

        setComments(newComments)
        setComment('')

        commentRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    
    return (
        <div>
            <div>
                <div>
                    <Typography gutterBottom variant='h6'>Comments</Typography>
                    {
                        comments.map((c, i) => (
                            <Typography key={i} gutterBottom>
                                <strong>{c.split(': ')[0]}</strong>
                                {c.split(':')[1]}
                            </Typography>
                        ))
                    }
                    <div ref={commentRef} />
                </div>
                {user?.result?.name && (
                    <div>
                        <Typography gutterBottom variant='h6'>Add comment</Typography>
                        <TextField 
                            fullWidth
                            rows={4}
                            variant='outlined'
                            label='Comment'
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button style={{marginTop: '10px'}} fullWidth disabled={!comment} onClick={handleClick}>
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comments
