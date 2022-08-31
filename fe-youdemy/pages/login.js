import React from 'react'
import { FormControlLabel, Checkbox, TextField, Box, Button, Grid, Link } from '@mui/material';


const login = () => {

    const handleSigninSubmit = async (data = {email: e.target?.email.value, password: e.targe}) => {
        e.preventDefault();
        const respone = await fetch('https://youdemy.onrender.com/auth/signin', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data)
        })
        return Response.json()
    }

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
  )
}

export default login