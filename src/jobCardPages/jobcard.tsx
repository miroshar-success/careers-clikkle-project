import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faWallet, faBriefcase, faLocationDot, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import './jobCard.css';
import JobRole from '../jobRolepages/jobRole';
import { Link } from 'react-router-dom';

type Card = {
  title: string;
  salary: string;
  experience: string;
  location: string;
  type: string;
  link: string;
};

export const jobCard: Card[] = [
  {
    title: 'Full Stack Developer',
    salary: '37,000 Cad',
    experience: '1 year',
    location: 'Remote',
    type: 'Development',
    link: '/portalPage',
  },
  
];

const JobCard: React.FC = () => {
  const [show, setShow] = useState<number | null>(null);
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {jobCard.map((card, index) => (
        <div key={index} className="main rounded-md border border-zinc-300 shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 mt-2 lg:p-0 p-4">

          <div className="row2 col-span-1 md:col-span-1 lg:col-span-1 text-left items-start lg:w-5/6">
          <Link to={card.link} onClick={handleLinkClick}>
            <h1 className="text-md font-semibold text-black px-2 py-4 dark:text-zinc-200">
              {card.title}
            </h1>
            </Link>
            
          </div>

          <div className="row3 col-span-1 pt-5 lg:w-2/3">
            <h1 className='text-sm font-semibold text-zinc-500 px-2'><FontAwesomeIcon icon={faWallet} /> {card.salary}</h1>

          </div>
          <div className="row4 col-span-1 pt-5 lg:w-2/3">
            <h1 className="text-zinc-500 px-2"><FontAwesomeIcon icon={faBriefcase} /> {card.experience}</h1>

          </div>
          <div className="row5 col-span-1 pt-5 lg:w-2/3">
            <p className="text-zinc-500 px-2"><FontAwesomeIcon icon={faLocationDot} /> {card.location}</p>

          </div>
          <div className="row6 col-span-1 pt-5 lg:w-2/3 pl-2 lg:pl-0">
            <p className="text-zinc-500 text-sm font-semibold"><FontAwesomeIcon icon={faLayerGroup} /> {card.type}</p>

          </div>


          <div className="row7 col-span-1 text-xs flex items-center justify-between sm:justify-center md:justify-center gap-2 lg:w-full">
            <p className="text-xs dark:text-zinc-300 text-black" onClick={() => setShow(show === index ? null : index)}>
              Show Details <FontAwesomeIcon icon={faChevronDown} />
            </p>
            <Link to={card.link} onClick={handleLinkClick}>
              <button className="text-white dark:text-white border border-black-500 px-6 py-2 rounded-md bg-blue-500">
                Apply Now
              </button>
            </Link>
          </div>
          {show === index ?
            <div className="row8 col-span-2 md:col-span-2 lg:col-span-7 px-5 py-5 pt-4 text-sm">
              <JobRole />
            </div>
            : null}
        </div>
      ))}
    </div>
  );
};

export default JobCard;
