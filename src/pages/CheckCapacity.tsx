import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import Header from "../components/Header";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';

type myProps={

}
type myState={
  expanded:string[],
  selected:string[]

}
class CheckCapacity extends React.Component<myProps,myState> {


  constructor(props:any){
    super(props);
    this.state={
      selected:[],expanded:[]
    }
  }
   handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    this.setState((state)=>({expanded:nodeIds}));
  };

   handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    this.setState((state)=>({selected:nodeIds}));
  };

   handleExpandClick = () => {
    this.setState((state)=>({expanded:state.expanded.length===0 ? ['sec_01', 'sec_02', 'sec_03'] : []}));
  };

  render() {
    return (
    <div style={{color:"#5db2e8"}}>
    <Header/>
    <h1> Check Capacity</h1>
    <Box sx={{ height: 600, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
      <Box sx={{ mb: 1 }}>
        <Button onClick={this.handleExpandClick}>
          {this.state.expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
      </Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={this.state.expanded}
        selected={this.state.selected}
        onNodeToggle={this.handleToggle}
        onNodeSelect={this.handleSelect}
        multiSelect
      >
        <TreeItem nodeId="sec_01" label="WareHouse Sector 01">
          <TreeItem nodeId="sec_01_rack_01" label="Rack 01" />
          <TreeItem nodeId="sec_01_rack_02" label="Rack 02" />
          <TreeItem nodeId="sec_01_rack_03" label="Rack 03" />
        </TreeItem>
        <TreeItem nodeId="sec_02" label="WareHouse Sector 02">
          <TreeItem nodeId="sec_02_rack_01" label="Rack 01" />
          <TreeItem nodeId="sec_02_rack_02" label="Rack 02" />
          <TreeItem nodeId="sec_02_rack_03" label="Rack 03" />
        </TreeItem>
        <TreeItem nodeId="sec_03" label="WareHouse Sector 03">
          <TreeItem nodeId="sec_03_rack_01" label="Rack 01" />
          <TreeItem nodeId="sec_03_rack_02" label="Rack 02" />
          <TreeItem nodeId="sec_03_rack_03" label="Rack 03" />
        </TreeItem>
      </TreeView>
    </Box>
    </div>
    );
  }
}
export default CheckCapacity;