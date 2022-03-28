import * as React from "react";
import Header from "../components/Header";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

interface ProductListModel{
  id:number,
  name:string,
  warehouseId:string,
  rackId:string
}
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
    headerName: 'Product Name',
    width: 150,
    editable: true,
  },
  {
    field: 'warehouseId',
    headerName: 'Warehouse Id',
    width: 150,
    editable: true,
  },
  {
    field: 'rackId',
    headerName: 'Rack Id',
    width: 110,
    editable: true,
  }
];

const data = [
  { id: 1, name: 'Iphone 6', warehouseId: 'Sector 1', rackId: "Rack_01" },
  { id: 2, name: 'Iphone 7', warehouseId: 'Sector 1', rackId: "Rack_02" },
  { id: 3, name: 'Iphone 8', warehouseId: 'Sector 2', rackId: "Rack_01" },
  { id: 4, name: 'Iphone 9', warehouseId: 'Sector 3', rackId: "Rack_01" },
  { id: 5, name: 'Iphone 10', warehouseId: 'Sector 3', rackId: "Rack_01" },
  { id: 6, name: 'Iphone 11', warehouseId: 'Sector 3', rackId: "Rack_02" }
];
class ProductListPage extends React.Component<myProps,myState> {
  render() {
    return (
      <div style={{color:"#5db2e8"}}>
      <Header/>
         <h1> Product List</h1>
      <div style={{ height: 400, width: 600 }}>
      <DataGrid
        rows={data}
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

export default ProductListPage;