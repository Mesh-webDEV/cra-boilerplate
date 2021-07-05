import React from 'react';

const BottomNavigation = () => {
  return (
    <div className='dark:bg-blacks-dark dark:text-whites-light h-9 fixed w-full bottom-0 rounded-t-2xl flex items-center justify-around space-x-2'>
      <div className='events-tab'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 22 24'
          className=' w-5 h-5'
        >
          <g id='Group_1365' transform='translate(-6413 6207)'>
            <g
              id='Rectangle_260'
              transform='translate(6413 -6207)'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <rect width='22' height='24' rx='2' stroke='none' />
              <rect x='1' y='1' width='20' height='22' rx='1' fill='none' />
            </g>
            <path
              id='Union_1'
              d='M0,14V12H9v2Zm0-4V8H14v2ZM0,6V4H9V6ZM0,2V0H11V2Z'
              transform='translate(6417 -6202)'
              fill='currentColor'
            />
          </g>
        </svg>
      </div>
      <div className='teams-tab'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 26 24'
          className='w-5 h-5'
        >
          <g id='Group_1363' transform='translate(-6909 -2797)'>
            <path
              id='Icon_ionic-md-person'
              d='M8.893,9.893A2.2,2.2,0,1,0,6.7,7.7,2.2,2.2,0,0,0,8.893,9.893Zm0,1.1c-1.455,0-4.393.286-4.393,1.742v1.1h8.787v-1.1C13.287,11.278,10.349,10.992,8.893,10.992Z'
              transform='translate(6908.5 2800.5)'
              fill='currentColor'
            />
            <path
              id='Icon_ionic-md-person-2'
              d='M8.893,9.893A2.2,2.2,0,1,0,6.7,7.7,2.2,2.2,0,0,0,8.893,9.893Zm0,1.1c-1.455,0-4.393.286-4.393,1.742v1.1h8.787v-1.1C13.287,11.278,10.349,10.992,8.893,10.992Z'
              transform='translate(6918.5 2800.5)'
              fill='currentColor'
            />
            <g
              id='Rectangle_263'
              transform='translate(6909 2799)'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <rect width='26' height='22' rx='2' stroke='none' />
              <rect x='1' y='1' width='24' height='20' rx='1' fill='none' />
            </g>
            <path
              id='Path_3'
              d='M0,0H2V2H0Z'
              transform='translate(6915 2797)'
              fill='currentColor'
            />
            <rect
              id='Rectangle_264'
              width='2'
              height='2'
              transform='translate(6927 2797)'
              fill='currentColor'
            />
            <path
              id='Icon_ionic-md-person-3'
              d='M10.539,11.539A3.02,3.02,0,1,0,7.52,8.52,3.028,3.028,0,0,0,10.539,11.539Zm0,1.51c-2,0-6.039.394-6.039,2.394v1.51H16.578v-1.51C16.578,13.442,12.539,13.049,10.539,13.049Z'
              transform='translate(6911.883 2798.774)'
              fill='currentColor'
            />
          </g>
        </svg>
      </div>
      <div className='new-event'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 28.008 20.182'
          className='w-7 h-7'
        >
          <g id='Group_1367' transform='translate(-6557.106 6205.091)'>
            <path
              id='Icon_awesome-plus-circle'
              d='M6.811.563a6.248,6.248,0,1,0,6.248,6.248A6.247,6.247,0,0,0,6.811.563Zm3.628,6.954a.3.3,0,0,1-.3.3H7.819v2.318a.3.3,0,0,1-.3.3H6.105a.3.3,0,0,1-.3-.3V7.819H3.485a.3.3,0,0,1-.3-.3V6.105a.3.3,0,0,1,.3-.3H5.8V3.485a.3.3,0,0,1,.3-.3H7.516a.3.3,0,0,1,.3.3V5.8h2.318a.3.3,0,0,1,.3.3Z'
              transform='translate(6571.555 -6199.968)'
              fill='currentColor'
              stroke='currentColor'
              strokeWidth='1'
            />
            <g id='Group_1366' transform='translate(6557.106 -6205.091)'>
              <g id='Union_2' transform='translate(1.453 0)' fill='none'>
                <path
                  d='M0,20.182V17.028H.631v-.892a1,1,0,0,1,1-1H6.937V11.1C4.412,10.072,2.523,6.031,2.523,1.216,2.523.81,2.536.4,2.563,0H13.834c.027.4.04.814.04,1.216,0,4.815-1.89,8.857-4.415,9.884v4.037h5.306a1,1,0,0,1,1,1v.892H16.4v3.154Z'
                  stroke='none'
                />
                <path
                  d='M 14.8971004486084 18.68160057067871 L 14.8971004486084 18.52799987792969 L 14.26620006561279 18.52799987792969 L 14.26620006561279 17.02799987792969 L 14.26620006561279 16.63619995117188 L 9.45989990234375 16.63619995117188 L 7.959900379180908 16.63619995117188 L 6.93720006942749 16.63619995117188 L 2.130900144577026 16.63619995117188 L 2.130900144577026 17.02799987792969 L 2.130900144577026 18.52799987792969 L 1.500000238418579 18.52799987792969 L 1.500000238418579 18.68160057067871 L 14.8971004486084 18.68160057067871 M 8.198760986328125 9.993102073669434 L 8.894829750061035 9.710030555725098 C 9.757450103759766 9.359220504760742 10.61493015289307 8.356800079345703 11.247389793396 6.959800243377686 C 11.94132518768311 5.427024364471436 12.33757591247559 3.498131990432739 12.37195491790771 1.500000238418579 L 4.025145530700684 1.500000238418579 C 4.059520721435547 3.498034000396729 4.455731391906738 5.426787853240967 5.149590015411377 6.95943021774292 C 5.782040119171143 8.356400489807129 6.639600276947021 9.358890533447266 7.50238037109375 9.709839820861816 L 8.198760986328125 9.993102073669434 M 16.3971004486084 20.18160057067871 L 2.24304201879022e-07 20.18160057067871 L 2.24304201879022e-07 17.02799987792969 L 0.6309002041816711 17.02799987792969 L 0.6309002041816711 16.13610076904297 C 0.6309002041816711 15.58349990844727 1.078200221061707 15.13619995117188 1.630800247192383 15.13619995117188 L 6.93720006942749 15.13619995117188 L 6.93720006942749 11.099289894104 C 4.412290096282959 10.07223987579346 2.522700309753418 6.030890464782715 2.522700309753418 1.215900301933289 C 2.522700309753418 0.8100003004074097 2.536200284957886 0.4005002975463867 2.563200235366821 2.85339353922609e-07 L 13.83390045166016 2.85339353922609e-07 C 13.86089992523193 0.4041002988815308 13.87440013885498 0.8136003017425537 13.87440013885498 1.215900301933289 C 13.87440013885498 6.031230449676514 11.98449993133545 10.07283020019531 9.45989990234375 11.09952068328857 L 9.45989990234375 15.13619995117188 L 14.76630020141602 15.13619995117188 C 15.3189001083374 15.13619995117188 15.76620006561279 15.58349990844727 15.76620006561279 16.13610076904297 L 15.76620006561279 17.02799987792969 L 16.3971004486084 17.02799987792969 L 16.3971004486084 20.18160057067871 Z'
                  stroke='none'
                  fill='currentColor'
                />
              </g>
              <g
                id='Subtraction_6'
                transform='matrix(0.985, 0.174, -0.174, 0.985, 14.711, 0.356)'
                fill='none'
              >
                <path
                  d='M.2,7.625h0L0,7.58V0L4.618,1.019.2,7.625Z'
                  stroke='none'
                />
                <path
                  d='M 1.000008463859558 4.634266376495361 L 2.973883152008057 1.679918885231018 L 0.9999995231628418 1.244578123092651 L 1.000008463859558 4.634266376495361 M 0.2043962329626083 7.625136852264404 L 0.2038462311029434 7.625007152557373 L 1.623374919290654e-05 7.580067157745361 L -3.766250529224635e-06 -3.004379323101602e-06 L 4.618396282196045 1.018586993217468 L 0.204686239361763 7.624697208404541 L 0.2043962329626083 7.625136852264404 Z'
                  stroke='none'
                  fill='currentColor'
                />
              </g>
              <g
                id='Subtraction_7'
                transform='matrix(-0.985, 0.174, -0.174, -0.985, 5.872, 7.865)'
                fill='none'
              >
                <path d='M.2,0h0L0,.045v7.58L4.618,6.607.2,0Z' stroke='none' />
                <path
                  d='M 0.9999995231628418 2.990842819213867 L 0.9999995231628418 6.380561351776123 L 2.973888397216797 5.945219039916992 L 0.9999995231628418 2.990842819213867 M 0.2043895721435547 1.430511474609375e-06 L 0.2046794891357422 0.0004315376281738281 L 4.618399620056152 6.606551647186279 L -4.76837158203125e-07 7.625141620635986 L -4.76837158203125e-07 0.04507160186767578 L 0.2038297653198242 0.0001215934753417969 L 0.2043895721435547 1.430511474609375e-06 Z'
                  stroke='none'
                  fill='currentColor'
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className='templates-tab'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 22 27'
        >
          <g id='Group_1364' transform='translate(-6951 -2796)'>
            <g id='Group_696' transform='translate(6933.823 2027.367)'>
              <rect
                id='Rectangle_257'
                width='11'
                height='2'
                transform='translate(21.177 780.633)'
                fill='currentColor'
              />
              <rect
                id='Rectangle_258'
                width='9'
                height='2'
                transform='translate(21.177 784.633)'
                fill='currentColor'
              />
              <rect
                id='Rectangle_259'
                width='14'
                height='2'
                transform='translate(21.177 788.633)'
                fill='currentColor'
              />
            </g>
            <g
              id='Ellipse_13'
              transform='translate(6958 2796)'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <circle cx='4' cy='4' r='4' stroke='none' />
              <circle cx='4' cy='4' r='3' fill='none' />
            </g>
            <g id='Group_695'>
              <g
                id='Rectangle_266'
                transform='translate(6951 2799)'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <rect width='22' height='24' rx='2' stroke='none' />
                <rect x='1' y='1' width='20' height='22' rx='1' fill='none' />
              </g>
              <rect
                id='Rectangle_267'
                width='10'
                height='4'
                transform='translate(6957 2801)'
                fill='currentColor'
              />
            </g>
          </g>
        </svg>
      </div>
      <div className='profile-tab'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 22 24'
          className='w-5 h-5'
        >
          <g id='Group_1369' transform='translate(-6700.761 6206.5)'>
            <path
              id='Icon_ionic-md-person'
              d='M10.766,11.766A3.133,3.133,0,1,0,7.633,8.633,3.142,3.142,0,0,0,10.766,11.766Zm0,1.566c-2.075,0-6.266.408-6.266,2.484v1.566H17.031V15.816C17.031,13.74,12.841,13.332,10.766,13.332Z'
              transform='translate(6700.996 -6205.941)'
              fill='currentColor'
            />
            <g id='Group_1368' transform='translate(-250.239 -9005.5)'>
              <g
                id='Rectangle_266'
                transform='translate(6951 2799)'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <rect width='22' height='24' rx='2' stroke='none' />
                <rect x='1' y='1' width='20' height='22' rx='1' fill='none' />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BottomNavigation;
