import React from 'react'
import { Link } from 'react-router-dom';

type Role = {
    title: string;
    link: string;
  };
  export const mm: Role[] = [
  
    {
        title: 'Marketing Manager | 29,000 cad | Remote | Marketing',
        link: '/marketingManager',
    },
    

    
  ];



const MMarketing: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return(
    <div>
         {mm.map((role) => (
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
                    <li>Conduct market research to identify trends and opportunities</li>
                    <li>Create, implement, and execute a marketing calendar</li>
                    <li>Develop and implement digital marketing strategies</li>
                    <li>Create and manage online advertising campaigns - drive traction with various marketing tools including marketing and email automation, SEM, SEO, PPC, Social, Video, retargeting, etc.</li>
                    <li>Monitor and analyze campaign performance using analytics tools</li>
                    <li>Measures and reports performance of all digital marketing campaigns and assesses against goals (ROI and KPIs)</li>
                    <li>Oversee and drive growth across all stages of the funnel, lead generation, conversion, retention and referrals</li>
                    <li>Brainstorms new and creative growth strategies through digital marketing.</li>
                    <li>You will develop end to end campaigns, from proposal to execution. You have experience with running quick and cost effective tests, validating, reporting, and scaling up campaigns.</li>
                    <li>Collaborate with internal teams to create landing pages and optimize user experience</li>
                    <li>Ensuring our websites are working properly, look great on all devices, align with our brand voice, look and feel, and keep them updated regularly</li>
                    <li>Take charge of our email and text campaigns, in collaboration with our designers, to create campaigns that are engaging and able to drive conversion</li>
                    <li>Manage Affiliate Partnerships and oversee our affiliate partnership strategy, working closely with our Affiliate Manager, ensuring all events and promotions are successful</li>
                    <li>Handle multiple responsibilities efficiently, with a balance of 60% hands-on work and 40% strategic campaign planning</li>
                    <li>Work closely with the creative team and Social Media Coordinator to create engaging campaigns, social content, emails, text messages, and other exciting content</li>
                    <li>Collaborate with agencies and other vendor partners</li>
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Qualifications</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>Working knowledge of HTML, CSS, Mern Stack and JavaScript development and constraints</li>
                    <li>Proficiency in Shopify, Klaviyo, CRM systems, Office Suite, Google Suite, Facebook Ads, TikTok Ads, Google Ads is a must</li>
                    <li>E-commerce Expertise: A minimum of 5 years of experience in e-commerce merchandising and marketing is required</li>
                    <li>Team Management Proven: Demonstrated experience in successfully managing a team is essential</li>
                    <li>High-Growth Adaptability: The ability to excel in a fast-paced, high-growth environment is a must</li>
                    <li>Self-Sufficiency and Organization: Demonstrated capability to work independently and maintain excellent organizational skills are required</li>
                    <li>You have the ability to lead by example and through clear and effective communication</li>
                    <li>An entrepreneurial mindset with a proven ability to work independently and collaboratively with cross-functional teams</li>
                    <li>Experience with the saas startups asset</li>
                    <li>[Bonus] Preferably you’ve worked in a startup before and understand life in a startup</li>
                    
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

export default MMarketing;
