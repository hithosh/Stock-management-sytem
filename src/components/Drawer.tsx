import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState,useEffect } from 'react';

type myProps={
  display:boolean
}
type myState={
  open:boolean;
    
}
class CustomDrawer extends React.Component<myProps,myState> {
 
  constructor(props:any){
    super(props);
    this.state={
      open:false
    }
  }
  componentWillReceiveProps(){
    this.setState({
      open: this.props.display,
  })
  }
  handleDrawerClose = () => {
    this.setState({ open: false })
  }

   toggleDrawer =
    ( isOpen: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
    };

   list =  (
    <Box
      sx={{ width:   250 }}
      role="presentation"
      onClick={this.toggleDrawer(false)}
      onKeyDown={this.toggleDrawer( false)}
    >
      <List>
        {['Product List ', 'Check Capacity', 'Expire Product', 'Procure Product'].map((text, index) => (
          <ListItem id={text} button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  render() {
    return (
    <div>
        <React.Fragment key="left">
          <Drawer
            anchor="left"
            open={this.state.open}
            variant="temporary"
             onBackdropClick={this.handleDrawerClose}

          >
            {this.list}
          
          </Drawer>
        </React.Fragment>
    </div>
    );
  }
}

export default CustomDrawer;