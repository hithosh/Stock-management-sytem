import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from "@mui/material/TextField";
import * as React from "react";

type myProps={

}
type myState={
    
}
const buttonStyle={
  background:"#398eda",color:"#ffffff" ,padding: "4px",
  marginLeft: "4px",
  marginRight: "4px"
}
const inputStyle={
     padding: "4px"
}
class Signup extends React.Component<myProps,myState> {
  render() {
    return (
      <div style={{color:"#5db2e8",position:"absolute",top:"100px",left:"1000px",border: "#a4cae2 solid 4px",
      padding: "8px",    borderRadius: "25px"}}>
        <h1>Register New User</h1>
        <Paper  style={inputStyle}>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        </Paper>
       <Paper style={inputStyle}>
       <TextField id="outlined-basic" label="Email ID" variant="outlined" />
       </Paper>
      <Paper style={inputStyle}>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      </Paper>
        <Paper style={inputStyle}>
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
        </Paper>
       <Paper style={inputStyle}>
       <Button style={buttonStyle}>Register</Button>
        <Button style={buttonStyle}>Clear</Button>
       </Paper>
        
      </div>
    );
  }
}

export default Signup;