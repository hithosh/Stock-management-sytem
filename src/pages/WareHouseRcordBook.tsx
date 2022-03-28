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
    field: 'eventdate',
    headerName: 'Event Date',
    width: 150,
    editable: true,
  },
  {
    field: 'eventType',
    headerName: 'Event Type',
    width: 110,
    editable: true,
  }
];

const rows = [
  { id: 1, name: 'Iphone 6', eventdate: '11/03/2022', eventType: "Deliver" },
  { id: 2, name: 'Iphone 7', eventdate: '12/03/2022', eventType: "Procure" },
  { id: 3, name: 'Iphone 8', eventdate: '11/03/2022', eventType: "Procure" },
  { id: 4, name: 'Iphone 9', eventdate: '12/03/2022', eventType: "Procure" },
  { id: 5, name: 'Iphone 10', eventdate: '10/03/2022', eventType: "Deliver" },
  { id: 6, name: 'Iphone 11', eventdate: '10/03/2022', eventType: "Deliver" }
];
class WareHouseRecordBook extends React.Component<myProps,myState> {
  render() {
    return (
      <div style={{color:"#5db2e8"}}>
      <Header/>
         <h1> WareHouse Record Book</h1>
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

export default WareHouseRecordBook;