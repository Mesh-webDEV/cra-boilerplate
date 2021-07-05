import React from 'react';

const RoundedCard = ({ children, className = '' }) => {
  return <div className={'rounded-5xl shadow-md' + className}>{children}</div>;
};

export default RoundedCard;
