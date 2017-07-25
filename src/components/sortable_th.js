import React from 'react';

const SortableTh = ({ label, sortAction }) => {

  return (
    <th>
      <button onClick={sortAction}>
      {label}
      </button>
    </th>
  );
};

export default SortableTh;