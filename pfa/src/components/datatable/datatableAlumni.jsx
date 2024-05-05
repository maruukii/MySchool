import React,{useState} from 'react';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Modify from "../../components/add/modify";
import Affect from "../../components/add/affect";

import "./dataTable.scss";
import { Link } from "react-router-dom";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

const DataTable = (props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState('');
  // TEST THE API

  // const queryClient = useQueryClient();
  // // const mutation = useMutation({
  // //   mutationFn: (id: number) => {
  // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
  // //       method: "delete",
  // //     });
  // //   },
  // //   onSuccess: ()=>{
  // //     queryClient.invalidateQueries([`all${props.slug}`]);
  // //   }
  // // });

  const handleDelete = (id) => {
    //delete the item
    // mutation.mutate(id)
  };
  const handleModify = (row) => {
    props.setModifopen(true);
    props.setRow(row);
  };
  const handleAffect = (row) => {
    props.setAffectopen(true);
    props.setRow(row);
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
            <div className='affect' onClick={()=>handleAffect(params.row)}> <img src="/up-arrow-svgrepo-com.svg" alt="" />
          {open&&<Affect slug="user" rowData={data} setOpen={setOpen} />}</div>
          <div className='modify' onClick={()=>handleModify(params.row)}> <img src="/view.svg" alt="" />
          {open&&<Modify slug="user" rowData={data} setOpen={setOpen} />}</div>
           
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar,
            columnHeader: {
                cellClassName: 'bold-header' // Applying a class to header cells
              }
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
      
    </div>
  );
};

export default DataTable;
