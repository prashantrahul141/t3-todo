import type { FC } from 'react';

const BackgroundGradientPattern: FC = () => {
  return (
    <div className='background-gradient fixed -z-50 h-screen w-screen'>
      <svg className='h-full w-full'>
        <defs>
          <pattern
            className=' fill-themePrimary-200/[0.025]'
            id='background-pattern'
            width='64'
            height='72'
            patternUnits='userSpaceOnUse'>
            <path d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'></path>
          </pattern>
        </defs>

        <rect
          x='0'
          y='0'
          width='100%'
          height='100%'
          fill='url(#background-pattern)'
        />
      </svg>
    </div>
  );
};

export default BackgroundGradientPattern;
