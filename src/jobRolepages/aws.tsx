import React from 'react'
import { Link } from 'react-router-dom';

type Role = {
    title: string;
    
    link: string;
  };
  export const aws: Role[] = [
  
    {
        title: 'AWS Platform Engineer | 41,000 cad | Remote | Development',
       link: '/awsPlatformEngineer',
    },
    

    
  ];



const AwsPlatform: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return(
    <div>
         {aws.map((role) => (
            <div className='text-sm dark:text-zinc-500 mx-4 sm:text-xs sm:text:left sm:text-xs'>
            <h1 className='dark:text-zinc-300 text-sm'>Job Description: {role.title}</h1>
            <section className="mb-8 pt-7">
                <h2 className="text-sm dark:text-zinc-300 mb-2">About Clikkle…</h2>
                <p className="text-sm md:text-base">Clikkle Technologies is disrupting the SaaS sector by making the hype of AI a reality. Our AI platforms are becoming the most in-demand solution on the market because we put the power of AI in the hands of businesses, who can now unleash the value in their data and operations in ways they’ve never been able to before! We are helping the world’s largest companies drive impactful results, almost instantly, from improving their productivity to spearheading their global sustainability efforts.</p>
                <p className="text-sm md:text-base pt-4">Our software and customer deployments prove each day that AI is revolutionizing how businesses start, grow and maintain there operations globally. We are continuously innovating to solve the most complex professional challenges and enable better business and personal life outcomes; Our work is not always easy, but it is ambitious and rewarding. So, we’re looking for people who love a challenge. People who are happiest when they’re solving problems and collaborating with the industry’s best and brightest. That’s the Clikkle way. It’s how we do things that might appear impossible. How we develop our employees’ strengths and unlock their potential. How we find meaning in everything we do.</p>
            </section>
            <section className="mt-8">
                <h2 className="text-sm dark:text-zinc-300 mb-2">Job Description </h2>
                <p className="text-sm md:text-base">Join our dynamic team as an AWS Platform Engineer and play a pivotal role in shaping the future of our flagship products. In this pivotal role, you'll be the architect and maestro of our AWS infrastructure, building and orchestrating a highly reliable, scalable, and secure platform that empowers our developers to deliver code at lightning speed. You'll wear multiple hats, from infrastructure guru to automation champion to security enforcer, all while ensuring our infrastructure scales seamlessly with our ambitious growth trajectory.</p>
            </section>
            <section className="mt-8">
                <h2 className="text-sm dark:text-zinc-300 mb-2">Key Responsibilities</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>Implement scalable, resilient and secure solutions on AWS .</li>
                    <li>Set up and configure tools for monitoring applications, ensuring security, and facilitating the stringent regulatory demands and auditing processes for the FinTech industry (SOC2 compliance is a must).</li>
                    <li>Create automation scripts and contribute to automated deployment processes, enhancing efficiency and reliability.</li>
                    <li>Implement Infrastructure as Code (IaC) using Terraform.</li>
                    <li>Proactively monitor performance, identifying issues, and resolving problems before they impact our users.</li>
                    <li>Provide troubleshooting and technical expertise to identify issues affecting service delivery, and recommend fixes for application issues, covering batch jobs, data stores, application functionality, management layers, and load balancing.</li>
                    <li>Innovate and evolve the platform by staying ahead by exploring new AWS services and technologies to optimize platform performance, cost efficiency, and scalability.</li>
                    
                </ul>
            </section>
            <section className="mt-8">
                <h2 className="text-sm dark:text-zinc-300 mb-2">Qualification</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>5+ years of hands-on experience as an AWS Engineer or Platform Engineer (AWS).</li>
                    <li>Deep understanding of AWS services and architecture, with expertise in core services like VPC, EC2, S3, IAM, Lambda, and Kubernetes.</li>
                    <li>Strong experience with Amazon Elastic Kubernetes Service (EKS).</li>
                    <li>Fluency in Infrastructure as Code (IaC) with Terraform (and/or CloudFormation; Terraform preferred).</li>
                    <li>Security-focused mindset with understanding of security best practices and compliance frameworks.</li>
                    <li>Top-notch analytical and problem-solving skills: You're a critical thinker who thrives on unraveling complex issues and devising optimal solutions.</li>
                    <li>Exceptional communication and interpersonal skills: You can translate technical complexities into clear and concise messages for both technical and non-technical audiences.</li>
                    <li>Experience in CI/CD pipelines and GitOps workflows.</li>
                    <li>Serverless experience with AWS Lambda and serverless architectures.</li>
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

export default AwsPlatform;
