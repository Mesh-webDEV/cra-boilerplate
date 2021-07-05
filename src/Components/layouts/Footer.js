import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <div className='flex flex-row space-x-8 dark:text-primary-dark opacity-70'>
      <div>contact us</div>
      <div>
        <a
          href='https://github.com/Mesh-webDEV'
          className='text-current'
          target='_blank'
        >
          <GitHubIcon fontSize='small' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
