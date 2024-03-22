import { Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export type HomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  appLogoUrl: string;
  description: string;
  freetrialLink: string;
  learnMoreLink: string;
};

export const features: HomeFeatureProps[] = [
  {
    name: 'Clikkle Campaigns',
    description:
      "Experience Clikkle's power! Data driven campaigns for real results, from audience collection to optimization. Elevate your brand with out digital marketing expertise",
    illistrationUrl:
      'https://cdn.clikkle.com/images/campaigns/illustration/campaigns1.png',
    appLogoUrl:
      'https://cdn.clikkle.com/images/campaigns/logo/2023/campaigns.png',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/campaigns',
  },
  {
    name: 'Clikkle Host',
    description:
      "Choose Clikkle's trusted, scalable hosting for high-performance webstites. Our optimized infrastructure guarentees uptime, supported by expert assistance.",
    illistrationUrl:
      'https://cdn.clikkle.com/images/host/illustration/host4.png',
    appLogoUrl: 'https://cdn.clikkle.com/images/host/logo/2023/host.png',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/host',
  },
  {
    name: 'Clikkle Files',
    description:
      'Welcome to Clikkle, the secure cloud file storage service. Enjoy easy file management, flexible sharing, and advanced encryption.',
    illistrationUrl:
      'https://cdn.clikkle.com/images/files/illustration/files1.png',
    appLogoUrl: 'https://cdn.clikkle.com/images/files/logo/2023/files.png',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/files',
  },
  {
    name: 'Clikkle E-sign',
    description:
      'Easily send, sign, and manage agreements with our electronic signature service. Enjoy robust security, real-time collaboration, and mobile accessibility.',
    illistrationUrl:
      'https://cdn.clikkle.com/images/e-sign/illustration/e-sign3.png',
    appLogoUrl: 'https://cdn.clikkle.com/images/e-sign/logo/2023/e-sign.png',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/esign',
  },
  {
    name: 'Clikkle Ads',
    description:
      "Maximize reach and conversions with Clikkle's exppert ads services. Our team creates, manages campaigns, and utilizes advanced targeting for business growth. Experience the difference today.",
    illistrationUrl: 'https://cdn.clikkle.com/images/ads/illustration/ads4.png',
    appLogoUrl: 'https://cdn.clikkle.com/images/ads/logo/2023/ads.png',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/ads',
  },
  {
    name: 'Clikkle Pitch',
    description:
      'Our platform offers a user-friendly interface to build beautiful templates, powerful collaboration, advanced design tools,and integration with popular services to create memorable presentations.',
    illistrationUrl:
      'https://cdn.clikkle.com/images/pitch/illustration/pitch1.png',
    appLogoUrl: 'https://cdn.clikkle.com/images/pitch/logo/2023/pitch.png',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/pitch',
  },
  {
    name: 'Clikkle C-Mail',
    description:
      'C-Mail: Secure, reliable web service for email-like communication. Send/receive messages, attachments and organize your inbox easily.',
    illistrationUrl:
      'https://cdn.clikkle.com/images/cmail/illustration/cmail1.png',
    appLogoUrl: 'https://cdn.clikkle.com/images/cmail/logo/2023/cmail.png',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/cmail',
  },
  {
    name: 'Clikkle Projects',
    description:
      'Unleash the AI power in project mangement. Intelligent task tracking, advanced collaboration and customizable workflows for unparalled productivity.',
    illistrationUrl:
      'https://cdn.clikkle.com/images/projects/illustration/projects1.png',
    appLogoUrl: 'https://cdn.clikkle.com/images/projects/logo/2023/projects.png',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/projects',
  },
  {
    name: 'Clikkle Launch',
    description:
      'Simplify legal operations with our comprehensive platform. Automate document generation, manage contracts, and track compliance efforlessly for enhanced efficiency.',
    illistrationUrl:
      'https://cdn.clikkle.com/images/launch/illustration/launch1.png',
    appLogoUrl: 'https://cdn.clikkle.com/images/launch/logo/2023/launch.png',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/launch',
  },
  {
    name: 'Clikkle HR',
    description:
      'Discover our comprehensive HR platform, offering employee management, payroll, performance tracking, and more. Empower your workforce today!',
    illistrationUrl: '/illustrations/hr.png',
    appLogoUrl: 'https://cdn.clikkle.com/images/hr/logo/2023/hr.png',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/hr',
  },
  {
    name: 'Clikkle Tax',
    appLogoUrl: 'https://cdn.clikkle.com/images/tax/logo/2023/tax.png',
    description: 'Do your taxes right however you choose. Entrust your taxes to expert system AI, File your own taxes, get professional answers on how to go about it, or get out expert AI to handle your tax from start to finish.',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/tax',
    illistrationUrl: 'https://cdn.clikkle.com/images/tax/illustration/Frame%203.png',
  },
  {
    name: 'Clikkle Chat',
    appLogoUrl: 'https://cdn.clikkle.com/images/chat/logo/2023/chat.png',
    description: 'Effortlessly automate routine tasks with our visual automation builder. Create robust automations effortlessly using no-code building blocks like bots, triggers, conditions, and rules.',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/chat',
    illistrationUrl: 'https://cdn.clikkle.com/images/chat/Clikkle%20Chat%20page/pexels-thisisengineering-3861969.jpg',
  },
  {
    name: 'Clikkle SMS',
    appLogoUrl: 'https://cdn.clikkle.com/images/sms/logo/2023/sms.png',
    description: 'Get connected with family and friends on Clikkle SMS, and enjoy premium services like voice note to text, quick replies, in-app video, and lots more on our safe and secure platform.',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/sms',
    illistrationUrl: 'https://cdn.clikkle.com/images/sms/illustration/sms4.png',
  },
  {
    name: 'Clikkle Social',
    appLogoUrl: 'https://cdn.clikkle.com/images/social/logo/2023/social.png',
    description: 'The social network for meeting new people. Get the best social experience from Clikkle, and connect with millions of people from across the globe with our safe and secure platform.',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/social',
    illistrationUrl: 'https://cdn.clikkle.com/images/social/illustrations/phone%20mockup.png',
  },
  {
    name: 'Clikkle Crew',
    appLogoUrl: 'https://cdn.clikkle.com/images/crew/logo/2023/crew.png',
    description: 'With live captions powered by Clikkle speech recognition technology, Clikkle Crew makes meetings more accessible. For non-native speakers, hearing impaired participants, or just noisy coffee shops, live captions make it easy for everyone to follow along (available in English only).',
    freetrialLink: 'https://apps.clikkle.com',
    learnMoreLink: '/crew',
    illistrationUrl: 'https://cdn.clikkle.com/images/crew/Clikkle%20crew%20LANDING%20PAGE%20UI/IMG_2738.JPG',
  },
];

const HomeFeature: React.FC<{ feature: HomeFeatureProps; left: boolean }> = ({
  feature,
  left,
}) => {
  const navigate = useNavigate();

  return (
    <div className='h-[calc(100vh-65px)] p-4 sm:p-8 mt-6 sm:mt-16'>
      <Typography
        variant='h6'
        className='text-center text-gray-800 dark:text-gray-300 pt-2 sm:pt-12'
      >
        See what you can do with {feature.name}
      </Typography>
      <div className='flex items-center justify-center animate-bounce mt-1'>
        <KeyboardArrowDownOutlinedIcon />
      </div>

    <div
      className={`mt-10 sm:mt-24 flex flex-col sm:flex-row items-center gap-16 p-2 flex-grow ${
        left ? 'sm:flex-row' : 'sm:flex-row-reverse'
      }`}
    >
        <img
          src={feature.illistrationUrl}
          className='h-72 w-auto sm:h-[calc(100vh-300px)] sm:w-auto ml-0 sm:ml-10'
          alt={`Illustration of ${feature.name}`}
        />
        <div className='max-w-[850px] flex-grow p-4 sm:p-16 m-8'>
          <div className='flex items-left gap-4 justify-left  sm:justify-start'>
            <img
              src={feature.appLogoUrl}
              alt={feature.name}
              className='h-[40px] w-[40px]'
            />
            <Typography
            className='hidden sm:flex text-center sm:text-left text-gray-800 dark:text-gray-300 font-light'
            style={{ fontSize: '2.0rem' }}
          >
              {feature.name}
            </Typography>
            <Typography
            className='sm:hidden text-center sm:text-left text-gray-800 dark:text-gray-300 font-normal sm:mt-0'
            style={{ fontSize: '1.4rem' }}
          >
              {feature.name}
            </Typography>
          </div>

          <br />
          <Typography
            className='hidden sm:flex text-center sm:text-left text-gray-800 dark:text-gray-300 font-light'
            style={{ fontSize: '1.2rem' }}
          >
            {feature.description}
          </Typography>

          <Typography
            className='sm:hidden text-center sm:text-left text-gray-800 dark:text-gray-300 font-normal sm:mt-0'
            style={{ fontSize: '0.8rem' }}
          >
            {feature.description}
          </Typography>

          <br />

          <div className='flex items-center gap-4 justify-center sm:justify-start'>
            <Button
              size='small'
              variant='contained'
              onClick={() => navigate(feature.freetrialLink)}
            >
              Start Free Trial
            </Button>
            <Button
              size='small'
              variant='outlined'
              onClick={() => navigate(feature.learnMoreLink)}
            >
              Learn More
            </Button>
            
          </div>
    </div>
  </div>
</div>


  );
};

export default HomeFeature;
