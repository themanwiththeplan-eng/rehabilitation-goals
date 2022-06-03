// import '../index.css';

import React, { useState } from 'react'
// import { useMutation } from '@apollo/react-hooks'
import { useMutation } from '@apollo/client'

import { LOGIN_USER } from '../utils/mutations'
import Auth from '../utils/auth'

import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useForm } from 'react-hook-form'

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' })

  const [login, { error }] = useMutation(LOGIN_USER)

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormState({
      ...formState,
      [name]: value,
    })
  }

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { data } = await login({
        variables: { ...formState },
      })
      console.log(data)
      Auth.login(data.login.token)
    } catch (e) {
      console.error(e)
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    })
  }

  return (
    <Container maxWidth="xs">
      <h2 id="login-h2">Login</h2>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            name="email"
            onChange={handleChange}
            variant="outlined"
            label="email"
            fullWidth
            autoComplete="email"
            value={formState.email}
          />

          {/* {...register("email", {required: "Required" })} */}
        </Box>
        <Box mb={2}>
          <TextField
            name="password"
            onChange={handleChange}
            type="password"
            variant="outlined"
            label="password"
            fullWidth
            value={formState.password}
          />
          {/* {...register("password", {required: "Required" })} */}
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  )
}

export default Login
