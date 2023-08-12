import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

export const ArticlePage = () => {
  const [data, setData] = useState([]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null); // For search functionality

  const toast = useRef(null);

  const deleteSelectedItems = () => {
    // setData(data.filter((item) => !selectedItems.includes(item:any)));
    setSelectedItems([]);
    // toast.current.show({ severity: 'success', summary: 'Success', detail: 'Items deleted', life: 3000 });
  };

  const handleSelectItem = (e: any) => {
    setSelectedItems(e.value);
  };

  const handleSubmit = (newItem: any) => {
    // setData([...data, newItem]);
  };

  const handleChange = (e: any) => {
    setGlobalFilter(e.target.value);
  };

  const header = (
    <div className="table-header">
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText type="search" value={globalFilter as any} onChange={handleChange} placeholder="Search..." />
        </span>
        <Button label="Add" className="p-button-success p-mr-2" onClick={handleSubmit} style={{ marginLeft: '8px' }} />
        <Button
          label="Delete"
          className="p-button-danger"
          disabled={!selectedItems.length}
          onClick={deleteSelectedItems}
          style={{ marginLeft: '8px' }}
        />
      </div>
    </div>
  );

  return (
    <div>
      <h1 style={{ marginLeft: '30px', fontWeight: 'bold' }}>Articles</h1>

      <DataTable
        title="Articles"
        className="lov-data-grid"
        value={data}
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 20]}
        selection={selectedItems}
        onSelectionChange={handleSelectItem}
        globalFilter={globalFilter}
        header={header}
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
        <Column field="name" header="Name" sortable></Column>
        <Column field="type" header="Type" sortable></Column>
        <Column field="createdDate" header="Created Date" sortable></Column>
      </DataTable>

      <Toast ref={toast} />
    </div>
  );
};
