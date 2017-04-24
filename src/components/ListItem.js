import React from 'react';
import DefinitionItem from './DefinitionItem';

const ListItem = ({ row }) => {
  return (
    <div
      style={{
        padding: '10px',
        border: '1px solid #ccc',
      }}
    >
      <a
        href="#"
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          display: 'block',
          textDecoration: 'none'
        }}
      >
        <span>{row.paragraph_value}</span>
      </a>
      <div>
        {
          row.data && row.data.length ?
          <div style={{ padding: '10px' }}>
            {row.data.map(data => <DefinitionItem data={data} />)}
          </div> :
          null
        }
      </div>
    </div>
  );
}

export default ListItem;
