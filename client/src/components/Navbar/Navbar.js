import React from 'react'
import { Container, AppBar, Typography} from '@material-ui/core'
import useStyles from './styles'

const Navbar = () => {
    //Contains a logo/home link, timeline, your account/popular?/sign in
    const classes = useStyles()
    return (
        <Container maxwidth='lg'>
            
            <AppBar className={classes.appBar} position='static' color='inherit' >
                <Typography variant='h2' align='start'>SocialApp</Typography>
            </AppBar>
            
            
        </Container>
    )
}

export default Navbar
