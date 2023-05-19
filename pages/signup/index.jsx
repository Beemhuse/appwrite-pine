import React from "react"
import { TextField, Button, Typography, Grid, } from "@mui/material";
import { account } from "@/appwrite/config";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import { uuidv7 } from "uuidv7";
import {ID} from 'appwrite'

import api from "../api/hello";


export default function Signup(props) {
  const [data, setData] = useState({
    // username: '',
    // email:'',
    // fullname:'',
    // password:''
  })
  const id = uuidv7()
  const [password, setPassword] = useState(false)


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
console.log(data)
  const showPassword = (e)=>{
    console.log('password change---> ',password)
    setPassword(!password)
  }

 
  const signUpPromise = account.create(
        // ID.unique(),
      data.email, 
      data.password,
      data.username, 
      data.fullname
      )

const signUpUser = async (e) => {
e.preventDefault()
signUpPromise.then(response => {
    console.log(response);
    window.location.href = "/chat"
    // Success

}, error => {
    console.log(error);
    // Error

});
}

const handleSignup = async (e) => {
    e.preventDefault();
    try {
       api.createAccount( 
        data.email, 
        data.password,
        data.username, 
        data.fullname
        );
      await api.createSession( data.email, 
        data.password,
       );
    } catch (e) {
        console.log(e)
    }
  };
  return (

    <Grid container sx={{ minHeight: '100vh' }} >
   <Grid item md={6} >
 <Typography variant="h4" sx={{my:1}} textAlign="center">
        Sign Up for an Account
      </Typography>

      <form onSubmit={signUpUser} >
      {/* {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )} */}


        <TextField
          id="filled-full-width"
          label="Username"
          name="username"
          fullWidth
          onChange={handleChange}
          margin="normal"
          variant="filled"
        />

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
          id="filled-full-width"
          name="fullname"
          label="Full Name"
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
        <button type='submit'>submit</button>
       </form>
       
   </Grid>

    </Grid>

  )
}