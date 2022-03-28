import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import * as React from "react";

type myProps={

}
type myState={
  showPassword:boolean,
  password:string
    
}
const buttonStyle={
    background:"#398eda",color:"#ffffff" ,padding: "4px",
    marginLeft: "4px",
    marginRight: "4px"
  }
  const inputStyle={
       padding: "4px"
  }
class Signin extends React.Component<myProps,myState> {

  constructor(props:any){
    super(props);
    this.state={
      showPassword:false,password:""
    }
    this.handleClickShowPassword=this.handleClickShowPassword.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleClickShowPassword(){
    this.setState((state)=>({showPassword:!state.showPassword}));
  }
  handleChange(event:any){
    this.setState((state)=>({password:event.target.value}));
  }
  render() {
    return (
      <div >
          <div style={{color:"#5db2e8",position:"absolute",top:"100px",left:"1000px",border: "#a4cae2 solid 4px",
      padding: "8px",    borderRadius: "25px"}}>
        <h1>Let's Login</h1>
        
       <Paper style={inputStyle}>
       <TextField id="outlined-basic" label="Email ID" variant="outlined" />
       </Paper>
      <Paper style={inputStyle}>
      {/* <TextField id="outlined-basic" type="password" label="Password" variant="outlined" /> */}
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Paper>
     <Paper style={inputStyle}>
       <Button style={buttonStyle}>Login</Button>
        <Button style={buttonStyle}>Clear</Button>
       </Paper>
        
      </div>
          
      </div>
    );
  }
}

export default Signin;