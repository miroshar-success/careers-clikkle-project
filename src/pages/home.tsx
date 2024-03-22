import {
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Facebook,
  QuestionMarkRounded,
  Twitter,
  YouTube,
  
} from '@mui/icons-material';
import SearchBar from './searchBar';
import JobCard from '../jobCardPages/jobcard';
import Banner from './banner';
import Front from '../jobCardPages/frontend';
import Aws from '../jobCardPages/awsPlatform';
import DataAE from '../jobCardPages/dataAE';
import MarketingManager from '../jobCardPages/marketingManager';
import GraphicsDesigner from '../jobCardPages/graphicsDesigner';
import SmManager from '../jobCardPages/smManager';
import Digital from '../jobCardPages/digitalAnalytics';
import Senior from '../jobCardPages/scManager';
import BusinessAnalyst from '../jobCardPages/bsAnalyst';
import { Instagram } from '@mui/icons-material';



const Home: React.FC = () => {
  
  return (
    <div className='px-2 py-8 sm:px-6 sm:py-6'>
      <Banner/>
        
      <SearchBar/>
      <JobCard/>
      <Front />
      <Aws/>
      <DataAE/>
      <MarketingManager/>
      <GraphicsDesigner/>
      <SmManager/>
      <Digital/>
      <Senior/>
      <BusinessAnalyst/>

            
      <div className='flex items-center gap-4 p-4'>
          <Typography className='text-gray-700 dark:text-gray-200'>
              Follow our blog
          </Typography>
          <IconButton>
            <Link to="https://www.youtube.com/clikkle">
            <YouTube />
            </Link>
          </IconButton>

          <IconButton>
          <Link to="https://twitter.com/clikkle">
            <Twitter />
          </Link>
          </IconButton>

          <IconButton>
          <Link to="https://facebook.com/clikkle">
            <Facebook />
          </Link>
          </IconButton>
          <IconButton>
          <Link to="https://www.instagram.com/myclikkle">
            <Instagram/>
          </Link>
          </IconButton>
        
        </div>
      

      <Divider />

      <div className='py-4 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 p-4'>
        <div className='flex items-center gap-2 sm:gap-4'>
          <Link to={"https://clikkle.com"}>
          <Typography className='text-gray-600 dark:text-gray-300'>
            Clikkle
          </Typography>
          </Link>
          <Link to={"https://clikkle.com/about"}>
          <Typography className='text-gray-600 dark:text-gray-300'>
            About
          </Typography>
          </Link>
          <Link to={"https://clikkle.com/products"}>
          <Typography className='text-gray-600 dark:text-gray-300'>
            Products
          </Typography>
          </Link>
          <Link to={"https://careers.clikkle.com"}>
          <Typography className='text-gray-600 dark:text-gray-300'>
            Careers
          </Typography>
          </Link>
          <Link to={"https://policies.clikkle.com/privacy"}>
          <Typography className='text-gray-600 dark:text-gray-300'>
            Privacy
          </Typography>
          </Link>
          <Link to={"https://policies.clikkle.com/terms"}>
          <Typography className='text-gray-600 dark:text-gray-300'>
            Terms
          </Typography>
          </Link>
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>
          <IconButton>
            <Link to="https://support.clikkle.com">
            <QuestionMarkRounded className='text-gray-600 dark:text-gray-300' />
            </Link>
          </IconButton>

          <Typography className='text-gray-600 dark:text-gray-300'>
          <Link to="https://support.clikkle.com">
            Help
            </Link>
          </Typography>
          <div className='border-gray-300 dark:border-gray-600 border-[1px] rounded-md px-6 py-[6px]'>
            <Typography className='text-gray-600 dark:text-gray-300'>
              English
            </Typography>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
