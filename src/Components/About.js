import { Typography ,Box,Chip} from '@mui/material';
import React from 'react';
function About(){

    return(
        <Box sx={{ backgroundImage: `url(${require('../img/pexels-photo-531880.jpeg')})`,height:'100vh',justifyContent:'center',alignItems:'center',backgroundSize: 'cover',paddingTop:'100px',marginLeft:'135px'}}>
        <Typography variant='h4' color={'white'} sx={{marginLeft:'10px'}}>
        career objective:
        </Typography>
        <Typography variant='h4' sx={{marginLeft:'10px'}} color={'blue'}>
        "Looking for a challenging role in IT where I can utilize my technical skills and knowledge to solve complex problems and contribute to the development of innovative solutions" 
        <Chip>hi</Chip>
        </Typography>
        </Box>
    );
}
export default About