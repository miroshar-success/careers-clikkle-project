import React from 'react'
import { Link } from 'react-router-dom';

type Role = {
    title: string;
    link: string;
  };
  export const dae: Role[] = [
  
    {
        title: 'Data Architect/Engineer | 41,000 cad | Remote | Engineer',
       link: '/dataArchitectEngineer',
    },
    

    
  ];



const DataArchitectEngineer: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return(
    <div>
         {dae.map((role) => (
            <div className='text-sm dark:text-zinc-500 mx-4 sm:text-xs sm:text:left sm:text-xs'>
            <h1 className='dark:text-zinc-300 text-sm'>Job Description: {role.title}</h1>
            <section className="mb-8 pt-7">
                <h2 className="text-sm dark:text-zinc-300 mb-2">About Clikkle…</h2>
                <p className="text-sm md:text-base">Clikkle Technologies is disrupting the SaaS sector by making the hype of AI a reality. Our AI platforms are becoming the most in-demand solution on the market because we put the power of AI in the hands of businesses, who can now unleash the value in their data and operations in ways they’ve never been able to before! We are helping the world’s largest companies drive impactful results, almost instantly, from improving their productivity to spearheading their global sustainability efforts.</p>
                <p className="text-sm md:text-base pt-4">Our software and customer deployments prove each day that AI is revolutionizing how businesses start, grow and maintain there operations globally. We are continuously innovating to solve the most complex professional challenges and enable better business and personal life outcomes; Our work is not always easy, but it is ambitious and rewarding. So, we’re looking for people who love a challenge. People who are happiest when they’re solving problems and collaborating with the industry’s best and brightest. That’s the Clikkle way. It’s how we do things that might appear impossible. How we develop our employees’ strengths and unlock their potential. How we find meaning in everything we do.</p>
            </section>
            <section>
                <h2 className="text-xl dark:text-zinc-300 mb-2">Key Responsibilities</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                   <li>Will play an active role in Mongo engineering across - Full lifecycle implementation from requirements analysis, platform selection and setup, technical architecture design, application design and development, testing, and deployment</li>
                   <li>Work with business users, SMEs, peer developers and other analysts to deliver high quality data models, architectural designs</li>
                   <li>Develop MongoDB schema design by applying the suitable design patterns based on specific use cases.</li>
                   <li>Develop and maintain conceptual, logical, and physical data models</li>
                   <li>Contribute to analysis, solution design, development, and implementation of operational and data warehouse projects.</li>
                   <li>Setup the physical data model including all physical database configurations such as indexes, tablespaces, table partitions, table constraints, relationships, etc.</li>
                   <li>Drive innovation by keeping current on relevant data trends via researching, presenting, and accurately articulating the benefits and goals of data architecture related technologies, such as Big Data, Cloud technologies, Kafka, and NoSQL</li>
                   <li>Expect to work with a fast-paced large agile team on complete software delivery lifecycle.Provide technical and data leadership to the application development group, IT, and the enterprise.</li>
                   <li>Work closely with key client and IT stakeholders in understanding business needs and recommend solutions.</li>
                   <li>Collaborate with domain and enterprise architects for delivery in compliance to strategic enterprise direction</li>
                   <li>Create and maintain data architecture, data management standards and conventions, data naming standards, and metadata standards to ensure effective availability, scalability, security, and integrity of data assets.</li>
                   
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Qualifications</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>Has designed high performant Mongo DB Collections, Document schemas.</li>
                    <li>Has hands on experience on data sync strategies from Kafka to Mongo Sync connector-based architectures.</li>
                    <li>Has extensive architecture, design and implementation experience on MongoDB</li>
                    <li>Has architected, designed and implement sharding and indexing strategies for MongoDB</li>
                    <li>Strong analytical and problem-solving abilities</li>
                    <li>Experience in Database design, administration, and security management</li>
                    <li>Knowledge of MongoDB administration, installation, troubleshooting in AWS environments</li>
                    <li>In-depth understanding of MongoDB architecture</li>
                    <li>10+ years of overall experience in IT. Experience with databases in Commercial cloud (Google Cloud Platform, Azure, AWS), SQL Server, Oracle, DB2, PostgreSQL and Redshift is preferred, and IMS (optional),</li>
                    <li>Strong working experience of data modeling, data warehousing, metadata management, database design and development 5+ years.</li>
                    <li>Logical and physical data modelling – 7+ years (dimensional and 3NF). In addition to all the traditional modelling techniques, the incumbent must also possess the knowledge to create logical data models using the Class Modelling technique as well the Generic Data Modelling approach.</li>
                    <li>Experience with data modeling using PowerDesigner and/or ER/Studio (for mongoDB)</li>
                    <li>Familiar with MongoDB Schema Design Patterns and the applicable use cases, solid design and working experience with MongoDB – 2+ years</li>
                    <li>Excellent communication, presentation, and interpersonal skills</li>
                    <li>Solid business and technical acumen, with demonstrated agility in learning and ability to become comfortable with unfamiliar businesses areas or technologies</li>
                    <li>Ability to work in a dynamic environment with changing priorities</li>
                    <li>Strong relationship management and consulting skills</li>
                    <li>Solid written and verbal communication skills</li>
                </ul>
            </section>
            <section className="mb-8">
            <p className="text-sm md:text-base">
            Clikkle is an equal opportunity agency and employer. We advocate for you and welcome anyone regardless of race, color, religion, national origin, sex, physical or mental disability, or age. So what are you waiting for. Come join the clikk
            </p>
            </section>
            <div className='pt-5 flex justify-center items-center'>
            <Link to={role.link} onClick={handleLinkClick}>
            <button className="text-white dark:text-white border border-black-500 px-6 py-2 rounded-md bg-blue-500">
              Apply Now
            </button>
            </Link>  
            </div>
            </div>
        
        

          ))}
        
    </div>
  );
};

export default DataArchitectEngineer;
