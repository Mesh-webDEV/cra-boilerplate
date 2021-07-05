import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'transparent',
    color: 'white',
    width: '75%',
    justifyContent: 'center',
  },
});

const Stepper = ({ steps, currentStep = 0, currentStepText = '' }) => {
  const classes = useStyles();
  return (
    <div className='w-full justify-center items-center flex flex-col'>
      <MobileStepper
        variant='dots'
        steps={steps}
        position='static'
        activeStep={currentStep}
        className={`${classes.root}`}
      />
      <div className='text-whites-light text-xs font-light opacity-80 tracking-tight'>
        {currentStepText}
      </div>
    </div>
  );
};

export default Stepper;
