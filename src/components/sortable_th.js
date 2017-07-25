import React from 'react';
import PropTypes from 'prop-types';

const SortableTh = ({ label, sortAction, active }) => {

  return (
    <th className={active ? 'active' : ''}>
      <button onClick={sortAction}>
      {label}
      </button>
    </th>
  );
};

SortableTh.propTypes = {
  label: PropTypes.string,
  sortAction: PropTypes.func,
  active: PropTypes.bool
};

export default SortableTh;