import React, { useState } from 'react';

const ToggleBtn = ({ onToggle, options, selectedOption }) => {
  const [selected, setSelected] = useState(selectedOption);
  const [primary] = useState(options.primary);
  const [secondary] = useState(options.secondary);

  const handleToggle = option => {
    setSelected(option);
    onToggle(option);
  };

  return (
    <div className='flex w-36'>
      <div
        className={`w-1/2 flex justify-center items-center text-xs dark:focus:ring-transparent ${
          primary === selected
            ? 'dark:bg-secondary-dark'
            : 'dark:bg-blacks-light opacity-60'
        } dark:bg-secondary-dark h-7 rounded-2xl rounded-r-none dark:focus:ring-offset-transparent-dark border-transparent dark:focus:border-opacity-25 dark:focus:border-secondary-dark`}
        onClick={() => handleToggle(primary)}
      >
        {primary}
      </div>
      <div
        className={`w-1/2 flex justify-center items-center text-xs dark:focus:ring-transparent ${
          secondary === selected
            ? 'dark:bg-secondary-dark'
            : 'dark:bg-blacks-light opacity-60'
        } h-7 rounded-2xl rounded-l-none dark:focus:ring-offset-transparent-dark border-transparent dark:focus:border-opacity-25 dark:focus:border-secondary-dark`}
        onClick={() => handleToggle(secondary)}
      >
        {secondary}
      </div>
    </div>
  );
};

export default ToggleBtn;
