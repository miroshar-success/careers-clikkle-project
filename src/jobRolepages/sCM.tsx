import React from 'react'
import { Link } from 'react-router-dom';

type Role = {
    title: string;
    link: string;
  };
  export const sc: Role[] = [
  
    {
        title: 'Senior Content Marketing Manager | 39,000 cad | Remote | Marketing',
        link: '/seniorContentManager',
    },
    

    
  ];



const SeniorContentM: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return(
    <div>
         {sc.map((role) => (
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
                    <li>Create and own all high-impact marketing content for the company including company emails, blogs, social media posts, etc</li>
                    <li>Manage and scale a robust content marketing program to position PackageX for accelerated growth at a strategic and tactical level</li>
                    <li>Develop, maintain, and drive a complete content lifecycle strategy across each stage of the sales funnel to build authority and drive conversion to support our KPIs for new business and customer upsell</li>
                    <li>Ability and knack for identifying and managing freelance writers to scale execution where needed</li>
                    <li>Cultivate and own strong relationships with third-party organizations, acting as a marketing leader to support the development and execution of collaborative marketing efforts and campaigns</li>
                    <li>Collaborate with cross-functional subject matter experts to cultivate themes that tie directly to buyer personas and growth goals</li>
                    <li>Create snackable, spin-off content from larger marketing pieces to make them accessible to various audiences across different formats and channels</li>
                    <li>Oversee copy for executive leadership presentations, events, website and pivotal sales materials as an extension of our brand narrative guidelines</li>
                    <li>Enable our sales teams with the positioning and context to use new marketing collateral</li>
                    <li>Operate as a thought partner for design and growth marketing to bring content to life in unique and engaging formats while also driving true pipeline impact</li>
                    <li>Assist in establishing a brand messaging standard</li>
                    <li>Evaluate content performance data and optimize content accordingly</li>
                    <li>Collaborate closely with the demand gen team to manage and maintain content for key campaigns and customer marketing nurturing</li>
                    <li>Manage our internal content library to enable our sales department to execute against joint OKRs</li>    
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Qualification</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>Minimum 5-7 years of experience in content writing and content strategy role at a B2B SaaS startup</li>
                    <li>Experience creating written content about technical products, especially targeting technical audiences at enterprise companies</li>
                    <li>An understanding of technical products with the ability to translate them into a story that will "wow" their target audiences</li>
                    <li>A desire to flex their creative muscle to surface thought leadership narratives and brand messaging from sales org data and cross-functional collaboration</li>
                    <li>Critical thinking skills and an analytical mindset who can be scrappy and test, and learn quickly</li>
                    <li>Exceptional cross-functional collaboration that is action-oriented and receptive to feedback</li>
                   
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

export default SeniorContentM;
