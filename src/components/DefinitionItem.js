import React from 'react';
import ValueItem from './ValueItem';

const DefinitionItem = ({ data }) => {
  console.log(data);
  return (
    <div>
      {
        data.concept !== 'null' ?
        <h2>{data.concept}</h2> :
        null
      }

      <p>{data.definition}</p>
      {
        data.hasMoreData ?
        <div style={{ padding: '10px' }}>
          {data.value.map(data => <ValueItem data={data} />)}
        </div> :
        null
      }
    </div>
  );
}

export default DefinitionItem;
