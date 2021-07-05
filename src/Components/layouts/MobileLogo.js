import React from 'react';

const MobileLogo = ({ size = 'medium', darkColor = 'text-primary-light' }) => {
  if (size === 'tiny')
    return (
      <div
        className={`relative dark:${darkColor} tracking-tight text-xl font-light text-primary-light`}
      >
        singularity
      </div>
    );

  if (size === 'medium')
    return (
      <div
        className={`relative dark:${darkColor} tracking-normal text-6xl space-y-2 font-light text-primary-light`}
      >
        singularity
        <span className='absolute text-4xl font-semibold tracking-tight italic dark:text-dark-backgroundDarker opacity-20 text-dark-background top-10 right-10'>
          .events
        </span>
        <span className='text-whites-light ml-8 opacity-75 tracking-tight -space-y-0.5 font-light text-sm flex flex-col'>
          <span>Your all-in-one platform</span>
          <span>
            for organizing <span className='font-bold'>Apex Legends</span>
          </span>
          <span className='ml-2 font-normal italic'>
            Events, tournaments {'&'} scrims
          </span>
        </span>
      </div>
    );
};

export default MobileLogo;
