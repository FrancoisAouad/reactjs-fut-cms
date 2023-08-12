import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { GridHeaderProps } from '../../../global/global.types';

export const GridHeader: React.FC<GridHeaderProps> = ({ globalFilter, selectedItems, addActions, deleteAction }) => {
  return (
    <div className="table-header">
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            type="search"
            value={globalFilter as any}
            onChange={() => {
              console.log('hitting search');
            }}
            placeholder="Search..."
          />
        </span>
        <Button label="Add" className="p-button-success p-mr-2" onClick={addActions?.onClick} style={{ marginLeft: '8px' }} />
        <Button
          label="Delete"
          className="p-button-danger"
          disabled={!selectedItems.length}
          onClick={deleteAction?.onClick}
          style={{ marginLeft: '8px' }}
        />
      </div>
    </div>
  );
};
