import React from 'react'
import { Link } from 'react-router-dom';

type Role = {
    title: string;
    link: string;
  };
  export const gd: Role[] = [
  
    {
        title: 'Graphics Designer | 27,000 cad | Remote | Marketing',
        link: '/graphicsDesigner',
    },
    

    
  ];



const GraphicsD: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return(
    <div>
         {gd.map((role) => (
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
                    <li>With initial guidance from the Art Director, execute creative projects for the entire organization from concept through completion, including marketing and fundraising print collateral such as: season brochure, advertisements, invitations, proposals, reports, brochures, promotional banners and signage.</li>
                    <li>Create digital assets including social media, email and web graphics, titling/credit slates for video, and assist with image resizing, extending and retouching as needed.</li>
                    <li>Communicate and collaborate frequently with staff members from all departments regarding project status, timelines and deadlines and participate in collaborative revision and approval process until final design is approved.</li>
                    <li>Ideate and initiate creative solutions, while remaining up-to-date on trends in design and technology to ensure output is consistent, relevant and reflective of the ballet brand.</li>
                    <li>Manage the approvals process and establish and maintain systems for completing projects in a timely manner.</li>
                    <li>Deliver high quality press-ready artwork to vendors and approve proofs, checking for accuracy, quality and brand consistency.</li>
                    <li>Monitor corporate branding and graphic standards to ensure compliance with Style Guide, while updating the guide as necessary.</li>
                    <li>Report on creative projects at weekly communications and development department meetings.</li>
                    <li>Perform other related duties as assigned.</li>
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Qualification</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>Bachelor's degree or equivalent work experience in Graphic Design, Visual Communication or related field</li>
                    <li>Proficiency in Adobe Creative Suite, especially Illustrator, Photoshop and InDesign, and other relevant tools and software</li>
                    <li>Experience in designing and producing marketing and branding materials, creating graphics and layouts</li>
                    <li>Knowledge of typography, color theory, and layout design</li>
                    <li>Ability to translate ideas into creative and compelling designs</li>
                    <li>Attention to detail and an eye for aesthetics</li>
                    <li>Ability to work within established brand guidelines and contribute to brand development</li>
                    <li>Strong communication skills</li>
                    <li>Ability to manage multiple projects and prioritize deadlines effectively</li>
                    <li>Experience working in a collaborative team environment, with excellent interpersonal skills</li>
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

export default GraphicsD;
