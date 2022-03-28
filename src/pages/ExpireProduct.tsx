import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import * as React from "react";
import Header from "../components/Header";

type myProps={

}
type myState={
    
}
const columns: GridColDef[] = [
  { field: 'id'
  , headerName: 'Product Id', 
    width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'expire',
    headerName: 'Expire Date',
    width: 150,
    editable: true,
  }
];

const rows = [
  { id: 1, name: 'Iphone 6', expire: '11/03/2022' },
  { id: 2, name: 'Iphone 7', expire: '12/03/2022' },
  { id: 3, name: 'Iphone 8', expire: '11/03/2022' },
  { id: 4, name: 'Iphone 9', expire: '12/03/2022' },
  { id: 5, name: 'Iphone 10', expire: '10/03/2022'},
  { id: 6, name: 'Iphone 11', expire: '10/03/2022'}
];
class ExpireProduct extends React.Component<myProps,myState> {
  render() {
    return (
      <div style={{color:"#5db2e8"}}>
      <Header/>
         <h1> Expired Product</h1>
      <div style={{ height: 400, width: 600 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
      </div>
    );
  }
}

export default ExpireProduct;