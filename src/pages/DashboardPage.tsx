import * as React from "react";
import CustomAppBar from "../components/AppBar";
import Header from "../components/Header";
import CustomDrawer from "../components/Drawer";

type myProps={

}
type myState={
  expire:number
    
}
class DashboardPage extends React.Component<myProps,myState> {
  constructor(props:any){
    super(props);
    this.state={
      expire:0
    }
  }

   render() {
    return (
    <div style={{color:"#5db2e8"}}>
   <Header/>
   <h1>Welcome to dashboard</h1>
   <h1>Expired Product Count is: {this.state.expire}</h1>
    </div>
    );
  }
}

export default DashboardPage;