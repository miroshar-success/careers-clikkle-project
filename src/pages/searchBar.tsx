import React, { useState } from 'react';

interface SearchBarProps {
  title?: string;
  onSearch?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ title = 'Search Bar', onSearch = () => {} }) => {
  const [jobRole, setJobRole] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');

  const handleSearchClick = () => {
    console.log('Fetching data with:', { jobRole, jobType, location, experience });
    onSearch();
  };

  return (
    <div>
      <div className='flex flex-col gap-4 md:pt-2 lg:pt-20 sm:pt-2 my-10 justify-center items-center sm:flex-row sm:justify-between sm:items-start px-4 lg:px-10'>
        <select
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className='w-full sm:w-64 py-3 pl-4 dark:bg-zinc-800 font-semibold rounded-md text-zinc-400 border border-blue-500'
        >
          <option value="">Job Role</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Graphics Designer">Graphics Designer</option>
          <option value="Marketing Manager">Marketing Manager</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
        </select>
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className='w-full sm:w-64 py-3 pl-4 dark:bg-zinc-800 font-semibold rounded-md text-zinc-400 border border-blue-500'
        >
          <option value="">Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Freelancer">Freelancer</option>
        </select>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className='w-full sm:w-64 py-3 pl-4 dark:bg-zinc-800 font-semibold rounded-md text-zinc-400 border border-blue-500'
        >
          <option value="">Location</option>
          <option value="Remote">Remote</option>
          <option value="In-Office">In-Office</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className='w-full sm:w-64 py-3 pl-4 dark:bg-zinc-800 font-semibold rounded-md text-zinc-400 border border-blue-500'
        >
          <option value="">Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="Junior Level">Junior Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>
        <button
          onClick={handleSearchClick}
          className='w-full sm:w-64 bg-blue-500 text-white font-bold rounded-md px-4 py-3'
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
