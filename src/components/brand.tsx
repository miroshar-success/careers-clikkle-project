import React from 'react';
import { Link } from 'react-router-dom';

export type BrandProps = {
  //
};

const Brand: React.FC<BrandProps> = () => {
  return (
    <div className='flex items-center flex-grow gap-2 lg:pl-4'>
      <Link to={"https://careers.clikkle.com/"}>
      <img
        className='w-[35px] h-[35px] sm:w-[35px] sm:h-[35px]'
        src='https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.png'
        />
        </Link>
        <Link to={"https://careers.clikkle.com/"}>
        <h1 className='text-black dark:text-white text-base sm:text-lg md:text-2xl sm:text-sm font-bold'
        
        >
          Clikkle
        </h1>
        </Link>
        <Link to={"https://careers.clikkle.com/"}>
      <h2 className='text-black dark:text-white text-base sm:text-lg md:text-2xl sm:text-xs'
        
      >
        Careers
      </h2>
        </Link>
        
        
        
    </div>
  );
};

export default Brand;
