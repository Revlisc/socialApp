import React from 'react'
import { useSelector } from 'react-redux'
import { CircularProgress} from '@material-ui/core'
import * as MUI from '@material-ui/core'
import Post from './Post/Post'

const Posts = ({ currentId, setCurrentId }) => {
    
    const posts = useSelector((state) => state.posts)

    console.log(posts)
    return (
        !posts.length ? <CircularProgress /> : (
            <MUI.Stack  alignItems='stretch' spacing={3}>
                {
                    posts.map((post) => (
                        <div  key={post._id} xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </div>
                    ))
                }
            </MUI.Stack>
        )
    )
}

export default Posts
