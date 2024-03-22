import React from 'react'
import { Link } from 'react-router-dom';

type Role = {
    title: string;
    link: string;
  };
  export const sm: Role[] = [
  
    {
        title: 'Social Media Manager | 35,000 cad | Remote | Marketing',
        link: '/socialMediaManager',
    },
    

    
  ];



const SocialMM: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return(
    <div>
         {sm.map((role) => (
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
                    <li>Develop and implement a comprehensive social media strategy aligned with the company's overall marketing goals.</li>
                    <li>Identify key performance indicators (KPIs) and set measurable objectives to assess the success of social media campaigns.</li>
                    <li>Create compelling and shareable content that aligns with our client's brand identity and resonates with their target audience.</li>
                    <li>Collaborate with the marketing team and influencer agency to ensure consistency in messaging across all channels.</li>
                    <li>Manage and oversee all social media accounts, including but not limited to Instagram, Twitter, and TikTok.</li>
                    <li>Stay informed about industry trends and algorithm changes to optimize content for maximum reach and engagement.</li>
                    <li>Foster and grow our client's online community by responding to comments, messages, and inquiries in a timely and professional manner.</li>
                    <li>Encourage user-generated content and initiate campaigns to increase customer participation.</li>
                    <li>Plan and execute paid social media advertising campaigns to drive traffic and conversions.</li>
                    <li>Monitor and analyze the performance of ad campaigns, making data-driven adjustments as needed.</li>
                    <li>Regularly track and report on social media performance using analytics tools.</li>
                    <li>Provide insights and recommendations for continuous improvement based on data analysis.</li>
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Qualifications</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>Bachelor's degree in Marketing, Communications, or a related field.</li>
                    <li>4+ years proven experience as a Social Media Manager in an e-commerce or retail environment.</li>
                    <li>In-depth knowledge of social media platforms, trends, and best practices.</li>
                    <li>Strong written and verbal communication skills.</li>
                    <li>Proficiency in social media management tools and analytics platforms.</li>
                    <li>Creative thinker with the ability to generate innovative ideas for content and campaigns.</li>
                    <li>Strong organizational and time-management skills</li>
                    
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

export default SocialMM;
