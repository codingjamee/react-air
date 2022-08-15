import React from 'react';

const SidoName = ({list}) => {
  return (
    <select>
      {list.map((sido) => (<option value={sido}> { sido }</option>))}
    </select>
  )
}

export default SidoName;