import React from "react";
import banner from './banner.png';
import {
 
  Typography,
} from '@mui/material';

const Banner: React.FC = () => {
  return (
    <div className="flex items-center justify-center lg:justify-between mb-16">
     <div className="lg:w-1/2 text-left p-4 lg:p-8">
      <Typography
            variant='h4'
            className='hidden sm:flex text-center sm:text-left text-gray-800 dark:text-gray-100 font-light lg:pr-12'
          >
          Find the perfect job that suits your schedule and work with experts
          
          </Typography>
          <Typography
           style={{ fontSize: '1.0rem' }}
            className='sm:hidden text-center sm:text-left text-gray-800 dark:text-gray-100 font-normal sm:mt-0'
          >
            Find the perfect job that suits your schedule and work with experts
          </Typography>

          <br />
          <Typography
            className='hidden sm:flex text-center sm:text-left text-gray-800 dark:text-gray-200 font-light lg:pr-16'
            style={{ fontSize: '1.0rem' }}
          >
              Find your next job in our platform, with 100% accuracy and legitimacy. Work with industry experts and gain the opportunity to grow on the job.
        
           </Typography>
          <Typography
            className='sm:hidden text-center sm:text-left text-gray-800 dark:text-gray-200 font-normal sm:mt-0'
            style={{ fontSize: '0.6rem' }}
          >
              Find your next job in our platform, with 100% accuracy and legitimacy. Work with industry experts and gain the opportunity to grow on the job.
        
          </Typography>
        
          </div>

      
      <div className="lg:w-1/2 text-center mr-10 p-4 lg:p-2  hidden lg:block">
        <img
          className="w-full h-auto"
          src={banner}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
