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


const Post = ({post, setCurrentId}) => {
    
    const dispatch = useDispatch()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
        console.log('User is', user)
    }, [location])
    
    const Likes = () => {
        if (post.likes.length > 0) {
        return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
            <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };
    return (
        <Card >
            <div>
                <Avatar alt={''} >{post?.name?.charAt(0)}</Avatar>
                <Typography variant='h6'>{post.name}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div>
                <Button style={{color: 'white'}} size='small' onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <div>
                <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>

            </div>
            <Typography variant='h5' gutterBottom >{post.title}</Typography>
            <CardContent>
                <Typography variant='h5' gutterBottom >{post.message}</Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary' disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                    
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size='small' color='primary' disabled={!user?.result} onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small' />
                        Delete
                    </Button>
                )}
                
            </CardActions>
            <Comments post={post}/>
        </Card>
    )
}


export default Post
