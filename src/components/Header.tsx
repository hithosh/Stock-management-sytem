import { AccountCircle } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import CustomAppBar from "./AppBar";
import CustomDrawer from "./Drawer";

type myProps={

}
type myState={
  menuShow:boolean;
    
}
class Header extends React.Component<myProps,myState> {

  constructor(props:any){
    super(props);
    this.state={
      menuShow:false
    }
    this.showMenu=this.showMenu.bind(this);
  }
  showMenu = (childData:boolean) =>{
    this.setState({menuShow: childData})
  }
  render() {
    return (
    <div >
    <Box sx={{ flexGrow: 1 }}>
    <CustomAppBar onMenuClick={this.showMenu}/>
    </Box>
      <CustomDrawer display={this.state.menuShow}/>
      </div>
    );
  }
}

export default Header;