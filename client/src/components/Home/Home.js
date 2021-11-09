import React, { useEffect } from 'react'
import {Container, Grid, Grow} from '@material-ui/core'
import Posts from '../Posts/Posts'
import  useStyles  from './styles'
import { useDispatch } from 'react-redux'

import { getPosts } from '../../actions/posts'
import Form from '../Form/Form'

const Home = () => {
    
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <Container>
            <Grid container justify='space-between' align-items='stretch' spacing={3} >
                <Grid item xs={12} sm={7} >
                    <Posts />
                </Grid>
            </Grid>
            <Form />
        </Container>
    )
}

export default Home
