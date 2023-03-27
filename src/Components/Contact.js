import { Typography } from '@mui/material';
import React from 'react';
import {Box} from '@mui/material';

function Contact() {
  return (
    <Box sx={{ backgroundImage: `url(${require('../img/blurback.webp')})`,
    backgroundSize: 'cover',
    backgroundColor:'red',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    marginLeft:'120px'}}>
      <Typography variant='h4'  color='black' marginRight='485px'><pre>Contact  :</pre></Typography>
      <Typography variant='h4'  color='black' marginRight='65px' ><pre>Email   :manikantarhong@gmail.com</pre></Typography>
      <Typography variant='h4'  color='black' marginRight='308px'><pre>Phone   :7975779143</pre></Typography>
      <Typography variant='h4'  color='black' marginRight='-20px'><pre>Address :1st main,Sarswatipuram,Mysore</pre></Typography>
      
    </Box>
  )
}

export default Contact;
