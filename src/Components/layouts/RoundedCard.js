import React from 'react';

const SharpCard = ({ children, className = '' }) => {
  return <div className={'rounded-3xl shadow-lg ' + className}>{children}</div>;
};

export default SharpCard;
