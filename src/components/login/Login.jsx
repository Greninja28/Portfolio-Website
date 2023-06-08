import React, { useEffect } from 'react'
import './Login.css'
import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/user'
import { useAlert } from 'react-alert'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const alert = useAlert()
  const { loading, message, error } = useSelector((state) => state.login)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch({ type: "CLEAR_ERRORS" })
    }
    if (message) {
      alert.success(message)
      dispatch({ type: "CLEAR_MESSAGES" })
    }
  }, [alert, error, message, dispatch])

  return (
    <div className='login'>

      <div className="loginContainer">
        <form className="loginForm" onSubmit={submitHandler}>

          <Typography variant='h4'>
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: '1vmax' }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>

          <div>
            <input type="email" placeholder='Admin Email' value={email} onChange={(e) => setEmail(e.target.value)} required />

            <input type="password" placeholder='Admin Password' value={password} onChange={(e) => setPassword(e.target.value)} required />

            <Button type='submit' variant='contained' disabled={loading}>Login</Button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Login