import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import Brand from './brand';
import { appList } from './appList';
import ThemeSwitch from './themeSwitch';

const sidebarRoutes = {
  'https://clikkle.com': 'Home',
  'https://clikkle.com/overview': 'Overview',
  'https://clikkle.com/features': 'Features',
  'https://clikkle.com/pricing': 'Pricing',
  'https://clikkle.com/getstarted': 'Get Started',
  
};

export type SidebarDrawerProps = {
  open: boolean;
  toggle: () => void;
};

const SidebarDrawer: React.FC<SidebarDrawerProps> = ({ open, toggle }) => {
  return (
    <Drawer PaperProps={{ style: { width: 360 } }} open={open} onClose={toggle}>
    <div className=''>
      <div className='bg-white dark:bg-zinc-900  sm:h-[calc(100vh-250px)] md:h-[calc(100vh-185px)] overflow-auto gap-1'>
        <div className='p-2 flex items-center justify-between'>
          <div className='flex-grow'>
            <Brand />
          </div>
          <ThemeSwitch />
          <IconButton onClick={toggle}>
            <CloseIcon />
          </IconButton>
        </div>
  
          <Divider className='pt-2'/>
        <div className='p-4 flex flex-col gap-6'>
          {Object.entries(sidebarRoutes).map(([route, label]) => (
            <Link to={route} key={route}>
              <Typography className='text-slate-500'>{label}</Typography>
            </Link>
          ))}
          <Typography
            
            className='text-sm sm:text-base md:text-lg text-gray-800 text-slate-500'
            >
            More Tools
          </Typography>
        </div> 
        <div className='flex flex-col'>
          {appList.map((app) => (
              <div
                key={app.logo}
                className='flex items-center gap-2 cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 p-2'
               >
                <Link to={app.link}>
                <img
                  src={app.logo}
                  alt={app.name}
                  className='h-[20px] w-[20px] sm:h-[15px] sm:w-[15px] md:h-[18px] md:w-[18px]'
                />
                </Link>
                <Link to={app.link}>
                <Typography
                  className='text-xs sm:text-base md:text-lg text-gray-800 text-slate-500'
                  sx={{ p: 1 }}
                >
                  {app.name}
                </Typography>
                </Link>
        

                </div>
              ))}
            </div>
          </div>
        <Divider />
  
  
      <div className='p-4 sm:h-[80px] md:h-[120px]'>
        <div className='flex flex-col gap-4 flex-grow'>
          <Button variant='contained' size='large'>
           <Link to={"http://clikkle.com"}>
            Try Clikkle Plus
            </Link>
          </Button>
          <Button variant='outlined' size='large'>
           <Link to={"http://clikkle.com"}>
            Go to Plus
            </Link>
          </Button>
          <Button size='large'>
            <Link to={"http://accounts.clikkle.com/login"}>
              Sign In
            </Link>
            </Button>

        </div>
      </div>
    </div>
  </Drawer>
  
  );
};

export default SidebarDrawer;
