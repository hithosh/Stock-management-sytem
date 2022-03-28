import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Header from "../components/Header";

type myProps={

}
type myState={
  productId:string
    
}
const buttonStyle={
  background:"#398eda",color:"#ffffff" ,padding: "4px",
  marginLeft: "4px",
  marginRight: "4px"
}
class DeliverProductPage extends React.Component<myProps,myState> {
  constructor(props:any){
    super(props);
    this.state={
      productId:""
    }
    this.changeValue=this.changeValue.bind(this);
  }
  changeValue(event:any){
    this.setState((state)=>({productId:event.target.value}));
  }
  render() {
    return (
      <div style={{color:"#5db2e8"}}>
      <Header/>
      <div style={{marginLeft:"50px"}}>
      <h1> Deliver Product</h1>
        <Box style={{padding:"8px"}}>
        <TextField label="Product Id" value={this.state.productId} onChange={this.changeValue} />
        </Box>
          <Box>
          <Button style={buttonStyle}>Deliver Product</Button>
          </Box>
    </div>
      </div>
    );
  }
}

export default DeliverProductPage;