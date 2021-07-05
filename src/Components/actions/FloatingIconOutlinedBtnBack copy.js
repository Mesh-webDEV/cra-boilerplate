import React from 'react';

const FloatingIconOutlinedBtnNext = ({ children }) => {
  return (
    <div className='dark:border-blacks-light text-sm dark:text-whites-dark relative rounded-md pr-3 pl-5 py-1 border-2 bg-opacity-90'>
      {children}
      <div className='absolute flex justify-center items-center w-6 h-6 rounded-full transform left-0 top-0.5 -translate-x-1/2 dark:text-whites-dark dark:bg-blacks-light p-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 shadow-md'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='transform'
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

export default FloatingIconOutlinedBtnNext;
