import React from 'react';

const FloatingActionBtn = ({ className, handleClick }) => {
  return (
    <div className={` ${className}`}>
      <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>
        <g transform='translate(-0.244 -0.16)'>
          <path
            d='M7672.245,3308.158a16,16,0,1,1,11.313-4.686A15.9,15.9,0,0,1,7672.245,3308.158Zm-2.391-25a1.338,1.338,0,0,0-.953.4l-1.262,1.277a1.343,1.343,0,0,0,0,1.9l5.409,5.408-5.409,5.406a1.343,1.343,0,0,0,0,1.9l1.268,1.268a1.326,1.326,0,0,0,.949.4,1.344,1.344,0,0,0,.954-.4l7.629-7.629a1.343,1.343,0,0,0-.006-1.906l-7.629-7.629A1.325,1.325,0,0,0,7669.854,3283.159Z'
            transform='translate(-7656 -3276)'
            fill='currentColor'
          />
        </g>
      </svg>
    </div>
  );
};

export default FloatingActionBtn;
