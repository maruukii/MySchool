import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
function MyDataGrid({ rows }) {
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "img",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => {
          return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
      },
      {
        field: "firstName",
        type: "string",
        headerName: "First name",
        width: 150,
      },
      {
        field: "lastName",
        type: "string",
        headerName: "Last name",
        width: 150,
      },
      {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 200,
      },
      {
        field: "phone",
        type: "string",
        headerName: "Phone",
        width: 200,
      },
      {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        type: "string",
      },
      {
        field: "verified",
        headerName: "Verified",
        width: 150,
        type: "boolean",
      },
    ];
  
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }
  
  export default MyDataGrid;
  