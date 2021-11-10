import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import Icon from './Icon'
import { useNavigate } from 'react-router-dom'
import { signin, signup } from '../../actions/auth'

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
    
    const state = null
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [registeredUser, setRegisteredUser] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(registeredUser) {
            dispatch(signin(formData, navigate))
        } else {
            dispatch(signup(formData, navigate))
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleShowPassword = () => {
        setShowPassword((password) => !password)
    }

    const changeUserStatus = () => {
        setRegisteredUser((user) => !user)
        handleShowPassword(false)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({type: 'AUTH', data: {result, token}})
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = () => {
        
        console.log('Google sign in was unsuccessful')
    }
    return (
        <Container component='main' maxWidth='xs'>
            <Paper elevation={3}>
                <Avatar >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{registeredUser ? 'Login' : 'Sign Up'}</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            !registeredUser && (
                                <>
                                    <Input name='firstName' label='First Name' handleChange={handleChange} half autoFocus />
                                    <Input name='lastName' label='Last Name' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name='email' label='Email' handleChange={handleChange} type='email'/>
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                        {!registeredUser && <Input name='confirmPassword' label='Confirm Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />}
                    </Grid>
                    <GoogleLogin 
                        clientId='256191339608-kmr7mncjvsfomuedmjrhgvemuf9odo2g.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained' >Sign In with Google</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    />
                    <Button type='submit' fullWidth variant='contained'>{registeredUser ? 'Login' : 'Sign Up'}</Button>
                    <Grid container justify='flex-end'>
                        <Grid item>
                           <Button onClick={changeUserStatus}>
                                { !registeredUser ? 'Already a user? Sign In' : 'Sign up for your account'}   
                            </Button> 
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
