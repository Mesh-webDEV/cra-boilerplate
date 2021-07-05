import React from 'react';

const CardTag = ({
  children,
  darkClasses = '',
  lightClasses = '',
  classes = '',
}) => {
  return (
    <div
      className={`${classes} dark:${darkClasses} ${lightClasses} font-light px-4 space-x-1 py-0.5 rounded-b-xl flex justify-center items-center`}
    >
      {children}
    </div>
  );
};

export default CardTag;
