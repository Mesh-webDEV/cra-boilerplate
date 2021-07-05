import React from 'react';

const FloatingIconOutlinedBtn = ({
  children,
  size = 'medium',
  withFloating = true,
  fontSize = 'text-base',
}) => {
  if (!withFloating)
    return (
      <div
        className={`dark:border-primary-light cursor-pointer ${fontSize} flex flex-col justify-center items-center dark:text-primary-light rounded-md py-0.5 px-1 border-2`}
      >
        {children}
      </div>
    );

  if (size === 'small')
    return (
      <div
        className={`dark:border-primary-light cursor-pointer ${fontSize} dark:text-primary-light relative rounded-md pl-2 pr-5 py-0.5 border-2`}
      >
        {children}
        <div className='absolute flex justify-center items-center w-7 h-7 rounded-full transform right-0 top-0 translate-x-1/2 dark:text-blacks-dark dark:bg-primary-light p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7 shadow-md'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
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

  if (size === 'medium')
    return (
      <div
        className={`dark:border-primary-light cursor-pointer text-lg dark:text-primary-light relative rounded-md pl-3 pr-6 py-1 border-2`}
      >
        {children}
        <div className='absolute flex justify-center items-center w-8 h-8 rounded-full transform right-0 top-0.5 translate-x-1/2 dark:text-blacks-dark dark:bg-primary-light p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
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

export default FloatingIconOutlinedBtn;
