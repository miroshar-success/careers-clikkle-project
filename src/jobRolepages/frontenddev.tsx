import React from 'react'
import { Link } from 'react-router-dom';

type Role = {
    title: string;
    link: string;
  };
  export const frontEnd: Role[] = [
  
    {
        title: 'Front End Developer | 30,000 cad | Remote | Development',
        link: '/frontenddeveloper',
    },
    

    
  ];



const FrontEnd: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return(
    <div>
         {frontEnd.map((role) => (
            <div className='text-sm dark:text-zinc-500 mx-4 sm:text-xs sm:text:left sm:text-xs'>
            <h1 className='dark:text-zinc-300 text-sm'>Job Description: {role.title}</h1>
            <section className="mb-8 pt-7">
                <h2 className="text-sm dark:text-zinc-300 mb-2">About Clikkle…</h2>
                <p className="text-sm md:text-base">Clikkle Technologies is disrupting the SaaS sector by making the hype of AI a reality. Our AI platforms are becoming the most in-demand solution on the market because we put the power of AI in the hands of businesses, who can now unleash the value in their data and operations in ways they’ve never been able to before! We are helping the world’s largest companies drive impactful results, almost instantly, from improving their productivity to spearheading their global sustainability efforts.</p>
                <p className="text-sm md:text-base pt-4">Our software and customer deployments prove each day that AI is revolutionizing how businesses start, grow and maintain there operations globally. We are continuously innovating to solve the most complex professional challenges and enable better business and personal life outcomes; Our work is not always easy, but it is ambitious and rewarding. So, we’re looking for people who love a challenge. People who are happiest when they’re solving problems and collaborating with the industry’s best and brightest. That’s the Clikkle way. It’s how we do things that might appear impossible. How we develop our employees’ strengths and unlock their potential. How we find meaning in everything we do.</p>
            </section>
            <section className="mt-8">
                <h2 className="text-sm dark:text-zinc-300 mb-2">Job Description </h2>
                <p className="text-sm md:text-base">We are looking for freshers with a keen eye for design for the position of front end developer. Front end developers are responsible for ensuring the alignment of web design and user experience requirements, optimizing web pages for maximum efficiency, and maintaining brand consistency across all web pages, among other duties.Front end developers are required to work in teams alongside back end developers, graphic designers, and user experience designers to ensure all elements of web creation are consistent. This requires excellent communication and interpersonal skills.</p>
            </section>
            <section className="mt-8">
                <h2 className="text-sm dark:text-zinc-300 mb-2">Key Responsibilities</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                <li>Determining the structure and design of web pages.</li>
                    <li>Ensuring user experience determines design choices.</li>
                    <li>Developing features to enhance the user experience.</li>
                    <li>Striking a balance between functional and aesthetic design.</li>
                    <li>Ensuring web design is optimized for smartphones.</li>
                    <li>Building reusable code for future use.</li>
                    <li>Optimizing web pages for maximum speed and scalability.</li>
                    <li>Utilizing a variety of markup languages to write web pages.</li>
                    <li>Maintaining brand consistency throughout the design.</li>
                </ul>
            </section>
            <section className="mt-8">
                <h2 className="text-sm dark:text-zinc-300 mb-2">Qualification</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                <li>Degree in computer science or related field.</li>
                    <li>Understanding of key design principles.</li>
                    <li>Proficiency in HTML, CSS, JavaScript, and jQuery.</li>
                    <li>Understanding of server-side CSS.</li>
                    <li>Experience with graphic design applications such as Adobe Illustrator.</li>
                    <li>Experience with responsive and adaptive design.</li>
                    <li>Understanding of SEO principles.</li>
                    <li>Good problem-solving skills.</li>
                    <li>Excellent verbal communication skills.</li>
                    <li>Good interpersonal skills.</li>
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

export default FrontEnd;
