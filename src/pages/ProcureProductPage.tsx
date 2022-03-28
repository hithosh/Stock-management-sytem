import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Header from "../components/Header";

type myProps={

}
type myState={
  productId:string,
  expire:string,
  name:string,
  warehouseId:string,
  rackId:string
}
const buttonStyle={
  background:"#398eda",color:"#ffffff" ,padding: "4px",
  marginLeft: "4px",
  marginRight: "4px"
}
class ProcureProductPage extends React.Component<myProps,myState> {
  constructor(props:any){
    super(props);
    this.state={
      productId:"",expire:"",name:"",warehouseId:"",rackId:""
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
      <h1> Procure Product</h1>
        <Box style={{padding:"8px"}}>
        <TextField label="Product ID" value={this.state.productId} onChange={this.changeValue} />
        </Box>
        <Box style={{padding:"8px"}}>
        <TextField label="Expire" value={this.state.expire} onChange={this.changeValue} />
        </Box>
        <Box style={{padding:"8px"}}>
        <TextField label="Name" value={this.state.name} onChange={this.changeValue} />
        </Box>
        <Box style={{padding:"8px"}}>
        <TextField label="Warehouse ID" value={this.state.warehouseId} onChange={this.changeValue} />
        </Box>
        <Box style={{padding:"8px"}}>
        <TextField label="Rack ID" value={this.state.rackId} onChange={this.changeValue} />
        </Box>
          <Box>
          <Button style={buttonStyle}>Procure Product</Button>
          </Box>
    </div>
      </div>
          
    );
  }
}

export default ProcureProductPage;