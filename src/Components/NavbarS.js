import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import CodeIcon from '@material-ui/icons/Code';


function NavbarS() {
  return (
    <Drawer variant="permanent" anchor="left" style={{backgroundColor:'orange',width:'20vw',}}>
      <List  style={{backgroundColor:'orange',background:'cover',height:'100vh'}}>
        
        <ListItem button component={Link} to="/Skills">
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default NavbarS;
