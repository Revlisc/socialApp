import React, { useState, useEffect } from 'react'
import {Container, Grid} from '@material-ui/core'
import Posts from '../Posts/Posts'
import useStyles  from './styles'
import { useDispatch } from 'react-redux'

import { getPosts } from '../../actions/posts'
import Form from '../Form/Form'

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])
    return (
        <Container className={classes.homeGridContainer}>
            <Form  currentId={currentId} setCurrentId={setCurrentId} className={classes.homeGrid}/>
            <Grid container direction='column-reverse' justify='space-between' align-items='stretch' >
                <Grid item xs={12} sm={7} className={classes.homeGrid}>
                    <Posts setCurrentId={setCurrentId}/>
                </Grid>
            </Grid>
            
        </Container>
    )
}

export default Home
