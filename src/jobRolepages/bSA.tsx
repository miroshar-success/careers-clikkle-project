import React from 'react'
import { Link } from 'react-router-dom';

type Role = {
    title: string;
    link: string;
  };
  export const bs: Role[] = [
  
    {
        title: 'Business Systems Analyst | 89,000 cad | Remote | Engineer',
        link: '/businessSystemAnalyst',
    },
    

    
  ];



const BusinessSA: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return(
    <div>
         {bs.map((role) => (
            <div className='text-sm dark:text-zinc-500 mx-4 sm:text-xs sm:text:left sm:text-xs'>
            <h1 className='dark:text-zinc-300 text-sm'>Job Description: {role.title}</h1>
            <section className="mb-8 pt-7">
                <h2 className="text-sm dark:text-zinc-300 mb-2">About Clikkle…</h2>
                <p className="text-sm md:text-base">Clikkle Technologies is disrupting the SaaS sector by making the hype of AI a reality. Our AI platforms are becoming the most in-demand solution on the market because we put the power of AI in the hands of businesses, who can now unleash the value in their data and operations in ways they’ve never been able to before! We are helping the world’s largest companies drive impactful results, almost instantly, from improving their productivity to spearheading their global sustainability efforts.</p>
                <p className="text-sm md:text-base pt-4">Our software and customer deployments prove each day that AI is revolutionizing how businesses start, grow and maintain there operations globally. We are continuously innovating to solve the most complex professional challenges and enable better business and personal life outcomes; Our work is not always easy, but it is ambitious and rewarding. So, we’re looking for people who love a challenge. People who are happiest when they’re solving problems and collaborating with the industry’s best and brightest. That’s the Clikkle way. It’s how we do things that might appear impossible. How we develop our employees’ strengths and unlock their potential. How we find meaning in everything we do.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Key Responsibilities</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>Develop effective and efficient solutions by researching/analyzing current state system capabilities and defining technology solutions options/recommendations working closely with key technology partners (e.g., Solution Architects and Quality Assurance staff).</li>
                    <li>Define, document, and translate business requirements into detailed functional specifications and non-functional specifications.</li>
                    <li>Support testing teams in translating requirements and use cases into test conditions and expected results for product, performance, user acceptance, and operational acceptance testing.</li>
                    <li>Support and contribute to project management activities by participating in the scoping and estimating of project efforts, risk identification and mitigation measures recommendation, communicating activity status and providing timely notification and escalation of possible issues/problems to the Project Manager.</li>
                    <li>Participate in quality management reviews, in particular reviews of the designs, prototypes and other requirements of work products to ensure they fulfill the requirements.</li>
                    <li>Support collaboration with key stakeholders to determine solutions, assess the impact on existing work processes and systems, and how to manage the integration.</li>
                    <li>May provide operational / process-related analysis and support to various extents. Ensure best practices related to the BSA discipline are adhered to and enforced within project processes and deliverables.</li>
                    <li>Adhere to existing processes/standards including requirements management and project management disciplines, well-defined enterprise technology delivery practices and standards, and business technology architecture, escalating escalate issues as required.</li>
                    <li>Continuously enhance knowledge/expertise in own area and keep current with leading-edge technologies trends/developments and develop expertise in client’s services, applications, infrastructure, analytical tools, and techniques that can contribute to effective solution development/delivery.</li>
                    <li>Continuously enhance knowledge of business domains and their products/services. Support the development of business cases including benefits identification, RFI/RFP, and service level agreements with vendors/suppliers consistent with technology requirements/guidelines. Maintain ongoing communication with all stakeholders throughout the project lifecycle. Able to perform BSA tasks effectively while assigned to a single project or multiple concurrent projects.</li>
                    <li>Prioritize and manage own workload to deliver quality results and meet timelines.</li>
                    <li>Support a positive work environment that promotes service to the business, quality, innovation, and teamwork and ensures timely communication of issues/ points of interest.</li>
                    <li>Participate in knowledge transfer within the team and business units, coach new or less experienced colleagues and act as a reference for the requirements management lifecycle. Identify and recommend opportunities to enhance productivity, effectiveness, and operational efficiency of the business unit and/or team.</li>
                    
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Qualification</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>3 years of experience as a Business Systems Analyst</li>
                    <li>3 years of experience processing technology-related access requests</li>
                    <li>3 years of experience running a team meeting</li>
                    <li>3 years of experience with ServiceNow</li>
                    <li>Previous experience working with various stakeholders at once</li>
                    <li>Exposure to Active Directory</li>
                    <li>Strong Documentation skills</li>
                    <li>Hands-on experience with Confluence and Jira</li>
                    <li>Enterprise platforms technology experience</li>
                    <li>Familiarity with Identity and access management</li>
                    <li>Exposure to Securities</li>
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-lg dark:text-zinc-300 mb-2">Benefits</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>Competitive salary and benefits package: We offer a comprehensive compensation package that includes competitive salary, health insurance, dental insurance, vision insurance, life insurance, disability insurance, paid time off, and tuition reimbursement.</li>
                    <li>Opportunity to work on cutting-edge technologies: Be at the forefront of technological innovation, working on exciting projects that utilize the latest technologies and frameworks.</li>
                    <li>Collaborative and supportive work environment: Join a team of talented and passionate startup professionals who value collaboration, knowledge sharing, and continuous learning.</li>
                    <li>Chance to make a significant impact: Your contributions will directly impact the success of our software products and the growth of our company.</li>
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

export default BusinessSA;
