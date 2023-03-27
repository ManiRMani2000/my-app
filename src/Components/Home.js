

    
import React from 'react';
import LinkedIn from '../img/linkedin.png';
import Instagram from '../img/instagram.png';
import Github from '../img/github.png';
import Boy from '../img/me.jpg';
import { Box,  ImageList, ImageListItem, Typography, } from '@mui/material';
import Avatar from '@material-ui/core/Avatar';

function Home() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' ,backgroundImage: `url(${require('../img/home.jpeg')})`,backgroundSize:'cover',height:'100vh',marginLeft:'140px',width:'90vw'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' ,flex:'1'}}>
         <Box  >
         <ImageList sx={{transform: 'scale(4.7)',paddingBottom:'100px',paddingLeft:'110px',paddingTop:'120px'}} >
          <ImageListItem >
          <Avatar alt="Profile Picture" src={Boy}/>
          </ImageListItem>
         </ImageList>
         </Box>
        <ImageList sx={{ display: 'flex',paddingBottom:'40px',transform: 'scale(0.5)',paddingLeft:'80px'}}>
          <ImageListItem sx={{paddingRight:'50px'}}>
           <a href='https://github.com/ManiRMani2000'><img src={Github} alt="" /></a> 
          </ImageListItem>
          <ImageListItem sx={{paddingRight:'50px'}}>
          <a href='https://www.linkedin.com/in/manikanta-r-201755226'><img src={LinkedIn} alt="" /></a> 
          </ImageListItem>
          <ImageListItem >
          <a href='https://instagram.com/m_a_n_i_r_m_a_n_i?igshid=ZDdkNTZiNTM='><img src={Instagram} alt="" /></a> 
          </ImageListItem>
        </ImageList>
      </Box>
      <Box sx={{justifyContent:'center',alignItems:'center',marginLeft:'100px',marginRight:'100px',marginTop:'30px'}}>
       <Typography variant='h2' color={'orange'}><pre>Manikanta R</pre></Typography> 
        <Typography variant='h2'>Iam a</Typography> 
        <Typography variant='h2'><pre>React developer</pre></Typography>
      </Box>
    </Box>
  );
}
export default Home;









































