import React from 'react';

const DefinitionItem = ({ data }) => {
  return (
    <div>
    {
      data.value !== 'null' ?
      <p style={{ fontSize: 12 }}>{data.value}</p> :
      null
    }

    </div>
  );
}

export default DefinitionItem;
