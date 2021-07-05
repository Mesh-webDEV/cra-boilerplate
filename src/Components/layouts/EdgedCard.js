import React from 'react';

const EdgedCard = ({ children, className = '' }) => {
  return (
    <div className={'rounded-t-6xl shadow-2xl ' + className}>{children}</div>
  );
};

export default EdgedCard;
