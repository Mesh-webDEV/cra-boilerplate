import React from 'react';

const FloatingIconBtnBack = ({
  children,
  withFloating = true,
  fontColor = 'dark:text-whites-light',
}) => {
  if (!withFloating)
    return (
      <div
        className={`text-sm ${fontColor} relative rounded-md flex justify-center items-center px-2 py-1 bg-opacity-90`}
      >
        {children}
      </div>
    );

  return (
    <div
      className={`text-sm ${fontColor} relative rounded-md pr-3 pl-5 py-1 bg-opacity-90`}
    >
      {children}
      <div
        className={`absolute flex justify-center items-center w-6 h-6 rounded-full transform left-0 top-0.5 -translate-x-1/2 ${fontColor} dark:bg-blacks-light p-2`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='transform rotate-180 shadow-md'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={4}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </div>
    </div>
  );
};

export default FloatingIconBtnBack;
