import React from "react"
import { TextField, Button, Typography, Grid, } from "@mui/material";
// import Grid from '@mui/material/Grid';
//  import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import { useAuth } from "../../context/auth";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import api from "../api/hello";





export default function HomePage(props) {
  const [data, setData] = useState({})

  const [password, setPassword] = useState(false)


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const showPassword = (e)=>{
    console.log('password change---> ',password)
    setPassword(!password)
  }

 const login = async (e) => {
    e.preventDefault();
 
   

      api.login(
        data.email,
        data.password
      )
      .then(response => {
        console.log(response);
        window.location.href = '/chat'
        // Success
    }, error => {
        console.log(error);
        // Error
    
    });
  
 }
  return (

    <Grid container sx={{ minHeight: '100vh' }} >
   <Grid item md={6} >
 <Typography variant="h4" sx={{my:1}} textAlign="center">
        Welcome Back!
      </Typography>

      <form >
      {/* {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )} */}


     

        <TextField
          id="filled-full-width"
          name="email"
          label="Email Address"
          fullWidth
          onChange={handleChange}
          margin="normal"
          variant="filled"
        />
     
        <TextField
          id="filled-full-width standard-adornment-password"
          label="Password"
          name="password"
          fullWidth
          type={ password ? 'text' : 'password' }
          autoComplete="current-password"
          margin="normal"
          onChange={handleChange}
          variant="filled"
          InputProps={{
          endAdornment:
            <InputAdornment position="end">
             <Button onClick={showPassword}> Show </Button>
            </InputAdornment>,
        }}
        /> 
       </form>
       
   </Grid>

    </Grid>

  )
}