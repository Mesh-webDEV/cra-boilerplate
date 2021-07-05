import React, { useContext } from 'react';
import AuthContext from '../../pages/join/context/AuthContext';
import Footer from './Footer';
import MobileLogo from './MobileLogo';

const TopNavigation = ({
  logo = true,
  darkBg = 'bg-blacks-light',
  darkText = 'text-whites-light',
  lightBg,
}) => {
  const { signout } = useContext(AuthContext);

  const handleSignOut = () => {
    return signout();
  };

  if (!logo)
    return (
      <div
        className={`dark:${darkBg} shadow-md dark:${darkText} h-9 fixed w-full top-0 flex items-center justify-end px-2`}
      >
        <div
          className='flex text-sm items-center space-x-1 opacity-90 font-light'
          onClick={handleSignOut}
        >
          <p>sign-out</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
            />
          </svg>
        </div>
      </div>
    );

  return (
    <div
      className={`dark:${darkBg} shadow-md dark:${darkText} h-9 fixed w-full top-0 flex items-center justify-between px-2`}
    >
      <MobileLogo size='tiny' darkColor='text-secondary-dark' />
      <div
        className='flex text-sm items-center space-x-1 opacity-90 font-light'
        onClick={handleSignOut}
      >
        <p>sign-out</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
          />
        </svg>
      </div>
    </div>
  );
};

export default TopNavigation;
