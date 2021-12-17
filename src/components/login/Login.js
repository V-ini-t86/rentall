import React, { useState } from 'react';
import {
  IconButton,
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  InputAdornment,
  FormControl,
} from '@mui/material';
import styled from '@mui/styled-engine';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
const Logo = 'images/logo.png';
const ImgLogo = styled('img')({
  height: '60px',
  width: '60px',
});

function Login() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
  }

  function handleChange(e) {
    e.target.id === 'username'
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '400px',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <IconButton sx={{ marginBottom: '20px' }}>
          <ImgLogo src={Logo} alt="logo" />
        </IconButton>
        <Box>
          <Paper sx={{ padding: '2rem' }}>
            <Typography variant="h5">Login</Typography>
            <FormControl onChange={handleChange}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                mt={2}
                sx={{ minWidth: '15rem' }}
                name="username"
                id="username"
                variant="standard"
                required
                label="Username"
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                m={3}
                name="password"
                id="password"
                variant="standard"
                required
                label="Password"
              />
              <Button
                sx={{ marginTop: '1.5rem' }}
                id="loginButton"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </FormControl>
          </Paper>
        </Box>
      </Box>
    </form>
  );
}

export default Login;
