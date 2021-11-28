import React from 'react'
import { useSelector } from 'react-redux'
import { CircularProgress} from '@material-ui/core'
import * as MUI from '@material-ui/core'
import Post from './Post/Post'
import useStyles from './styles'

const Posts = ({ currentId, setCurrentId }) => {
    
    const classes = useStyles()
    const posts = useSelector((state) => state.posts)

    console.log(posts)
    return (
        !posts.length ? <CircularProgress /> : (
            <MUI.Stack className={classes.postEntry} divider={
                
                <div 
                  style={{ 
                    width: "100%", 
                    height: 15,
                    backgroundColor: "white" 
                  }} 
                />
            }>
                {
                    posts.map((post) => (
                        <div  key={post._id} xs={12} sm={8} >
                            <Post post={post} setCurrentId={setCurrentId} className={classes.post} />
                            
                        </div>
                    ))
                }
            </MUI.Stack>
        )
    )
}

export default Posts
