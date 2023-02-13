import React from 'react'
import MUIDataTable from "mui-datatables";
import Navbar from './Navbar';
const CMS = (props) => {
  const options = props.options ? props.options : {
    filterType: 'checkbox',
    selectableRows: 'none',
    // onRowClick: (a, b) => handleEvent(a, b),
    // onRowsDelete: (a, b) => deletedrow(a, b),
    print: false,
    filter: false,
    viewColumns: false,
    download: false,
    rowsPerPage: 3,
    rowsPerPageOptions: [1, 3, 5, 6],
  };
  const data = [
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  ];
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
      }
    },
  ];
  return (
    <div className='container px-5 py-2'>
      <Navbar/>
      <div style={{ height: '100%', display: 'table', tableLayout: 'fixed', width: '100%', marginTop : '50px' }} className="muidatatable" >
        <MUIDataTable
          title={""}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>

  )
}

export default CMS