import { AccountCircle } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "@mui/material/AppBar";

type myProps={
    onMenuClick:any

}
type myState={
  
    
}
class CustomAppBar extends React.Component<myProps,myState> {
  constructor(props:any){
    super(props);
   this.onTrigger=this.onTrigger.bind(this);
  }
  onTrigger = (event:any) => {
    this.props.onMenuClick(true);
    event.preventDefault();
}
 
  render() {
    return (
        <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={this.onTrigger}
          >
            <MenuIcon />
          </IconButton>
          </Box>
          <Box sx={{ flexDirection: 'row-reverse' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="User"
            sx={{ mr: 2 }}
          >
            <AccountCircle />
          </IconButton>
          </Box>
        </Toolbar>
      </AppBar>   
    );
  }
}

export default CustomAppBar;