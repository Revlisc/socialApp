import React, { useState, useEffect } from 'react'
import { Card, CardActions, CardContent, Button, Typography, Avatar } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'
import { useLocation } from 'react-router-dom'
import Comments from '../Comments/Comments'
import useStyles from './styles'


const Post = ({post, setCurrentId}) => {
    
    const dispatch = useDispatch()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [showComment, setShowComment] = useState(false)
    const classes = useStyles()

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
        console.log('User is', user)
    }, [location])

    const commentButton = () => {
        setShowComment((show) => !show)
    }
    
    const Likes = () => {
        if (post.likes.length > 0) {
        return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
            <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>
    }

    const CommentNumber = () => {
        if (post.comments.length > 0) {
            return <>Comments ({post.comments.length})</>
        }
        return <>Comments</>
    }
    return (
        <Card >
            <div className={classes.postHeader}>
                <Avatar alt={''} >{post?.name?.charAt(0)}</Avatar>
                <Typography className={classes.postHeaderItem} variant='h6'>{post.name}</Typography>
                <Typography className={classes.postHeaderItem} variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <div className={classes.edit}>
                        <Button style={{color: 'white'}} size='small' onClick={() => setCurrentId(post._id)}>
                            <MoreHorizIcon fontSize='large' style={{ fill: 'black'}} />
                        </Button>
                    </div>
                )}
            </div>
            <div>
                <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>

            </div>
            
            <CardContent>
                <Typography variant='body1' gutterBottom className={classes.textContent}>{post.message}</Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary' disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                    
                    <Likes />
                </Button>
                <Button size='small' color='primary' disabled={!user?.result} onClick={commentButton} >
                    <CommentNumber />
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size='small' color='primary' disabled={!user?.result} onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small' />
                        Delete
                    </Button>
                )}
                
            </CardActions>
            {
                showComment && <Comments post={post} /> 
            }
            
        </Card>
    )
}


export default Post
