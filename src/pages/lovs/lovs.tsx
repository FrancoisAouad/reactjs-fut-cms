/* Styles */
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './lovs.css';
/* Hooks */
import { useState, useEffect } from 'react';
/* Components */
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { GridHeader } from '../../components/molecules/grid-header/grid-header';
/* Utils */
import { showToast } from '../../utils/common-utils';
/* Configs */
import { ToastType } from '../../configs/enums';
/* Services */
import { getLovData } from './lovs.service';
import { useNavigate } from 'react-router-dom';

export const LovPage = () => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [statuses] = useState(['Active', 'Inactive']);
  const navigate = useNavigate();

  const getLovStatus = (lov: any) => {
    switch (lov.status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'danger';
      default:
        return null;
    }
  };
  const getSeverity = (value: any) => {
    switch (value) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'danger';

      default:
        return null;
    }
  };
  const statusEditor = (options: any) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Select a Status"
        itemTemplate={(option: any) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };
  const textEditor = (options: any) => {
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
  };
  const statusBodyTemplate = (rowData: any) => {
    return <Tag value={rowData.status} severity={getLovStatus(rowData)} style={{ cursor: 'default' }}></Tag>;
  };

  const viewButtonTemplate = (rowData: any) => {
    return (
      <Button
        icon="pi pi-eye"
        className="p-button-rounded p-button-secondary"
        onClick={() => {
          /* not empty */
        }}
      />
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: any = await getLovData();
        setData(result);
      } catch (error) {
        showToast(ToastType.ERROR, 'Error fetching data!');
      }
    };
    fetchData();
  }, []);
  const handleSelectionChange = (e: any) => {
    setSelectedItems(e.value); // e.value contains the array of selected items
  };

  return (
    <div>
      <h1 style={{ marginLeft: '30px', fontWeight: 'bold' }}>Lov</h1>

      <DataTable
        title="Lov"
        // className='lov-data-grid'
        value={data}
        paginator
        rows={10}
        editMode="row"
        dataKey="_id"
        style={{ border: '1px solid #ccc', borderRadius: '10px', marginLeft: '20px', marginRight: '20px' }}
        rowsPerPageOptions={[5, 10, 20]}
        selection={selectedItems}
        onSelectionChange={handleSelectionChange}
        globalFilter={globalFilter}
        header={
          <GridHeader
            globalFilter={globalFilter}
            selectedItems={selectedItems}
            addActions={{
              onClick() {
                console.log('HITTING ON CLICK');
              },
              onChange() {
                console.log('ON CHANGE');
              },
            }}
          ></GridHeader>
        }
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
        <Column field="_id" header="id" hidden={true}></Column>
        <Column field="value" header="Value" editor={(options) => textEditor(options)} sortable></Column>
        <Column field="type" header="Type" editor={(options) => textEditor(options)} sortable></Column>
        <Column field="code" header="Code" editor={(options) => textEditor(options)} sortable></Column>
        <Column field="status" header="Status" editor={(options) => statusEditor(options)} body={statusBodyTemplate} sortable></Column>
        <Column field="sortOrder" header="Sort Order" editor={(options) => textEditor(options)} sortable></Column>
        <Column body={viewButtonTemplate} style={{ width: '3em' }} />
        <Column rowEditor={true} />
      </DataTable>
    </div>
  );
};
