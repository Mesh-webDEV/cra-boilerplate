import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import LogoBR from '../../Images/LogoBR';
import FadeAnimation from './../../Animations/FadeAnimation';

const MobileBaseLayout = ({
  children,
  header,
  bottomNav,
  footer,
  isHome = false,
}) => {
  return (
    <FadeAnimation fadeIn>
      <div
        className={`MobileBaseLayout ${
          isHome ? 'home-height' : 'h-full'
        } flex flex-col relative dark:bg-dark-background`}
      >
        {isHome && (
          <div className='absolute z-0 top-6 left-6 transform -translate-x-1/3 -translate-y-1/3'>
            <Timeline
              target={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='427.939'
                  height='427.939'
                  viewBox='0 0 427.939 427.939'
                >
                  <g id='Group_1551' transform='translate(-6376.364 7208.636)'>
                    <circle
                      id='Ellipse_57'
                      cx='213.97'
                      cy='213.97'
                      r='213.97'
                      transform='translate(6376.364 -7208.636)'
                      fill='#0b0d13'
                    />
                    <g id='Group_1478' transform='translate(6469.48 -7147.426)'>
                      <path
                        id='Path_22'
                        d='M1109.423,403.3a45.052,45.052,0,0,0,33.549,43.547l-52.606,52.609a133.907,133.907,0,0,1-17.457-14.729,136.424,136.424,0,0,1-18.99-169.411,127.03,127.03,0,0,1,18.99-23.987,136.535,136.535,0,0,1,162.714-23.121L1144.5,359.329A45.118,45.118,0,0,0,1109.423,403.3Z'
                        transform='translate(-1032.845 -251.206)'
                        fill='#21282f'
                      />
                      <g id='Group_1477' transform='translate(42.263 57.449)'>
                        <path
                          id='Path_23'
                          d='M1227.235,452.59a127.119,127.119,0,0,1-18.99,23.984,136.529,136.529,0,0,1-162.714,23.088l93.951-93.918a45.084,45.084,0,0,0-.534-85.488l51.806-51.806a129.489,129.489,0,0,1,17.491,14.726A136.468,136.468,0,0,1,1227.235,452.59Z'
                          transform='translate(-1045.53 -268.45)'
                          fill='#21282f'
                        />
                      </g>
                    </g>
                    <circle
                      id='Ellipse_58'
                      cx='22.67'
                      cy='22.67'
                      r='22.67'
                      transform='translate(6567.662 -7017.338)'
                      fill='#f10041'
                    />
                  </g>
                </svg>
              }
            >
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={0.6} />
              <Tween from={{ y: '-400px' }} ease='back.out(1.2)' />
              <Tween
                to={{ rotation: 360 }}
                duration={85}
                repeat={-1}
                ease='none'
              />
            </Timeline>
          </div>
        )}

        <div className='w-full m-0 sticky z-20 dark:text-whites-light'>
          {header}
        </div>
        {children}
      </div>
    </FadeAnimation>
  );
};

export default MobileBaseLayout;
