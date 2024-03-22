import { Divider } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faWallet, faBriefcase, faLocationDot, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import FooterBlock from "./footer";

const Fed: React.FC = () => {

    const navigate = useNavigate();

    const handleApply = () => {
        navigate("/apply-for-job", { state: { role: "Front End Developer" } });
    }

    return (
        <div className="flex flex-col h-screen mx-8 md:mx-16 lg:mx-24 xl:mx-32 gap-4 dark:text-zinc-500">
            <Link to="/">
                <button className="dark:text-white text-zinc-500 text-lg font-bold"><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
            </Link>
            <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4">Front End Developer</h1>
            <div className="flex flex-col dark:text-zinc-400 md:flex-row gap-8 mt-5">
                <div className="flex items-center"><FontAwesomeIcon icon={faWallet} /> <span className="ml-2">30,000 Cad</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faBriefcase} /> <span className="ml-2">1 years</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faLocationDot} /> <span className="ml-2">Remote</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faLayerGroup} /> <span className="ml-2">Development</span></div>
            </div>
            <Divider />
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">About Clikkle…</h2>
                <p className="text-sm md:text-base">Clikkle Technologies is disrupting the SaaS sector by making the hype of AI a reality. Our AI platforms are becoming the most in-demand solution on the market because we put the power of AI in the hands of businesses, who can now unleash the value in their data and operations in ways they’ve never been able to before! We are helping the world’s largest companies drive impactful results, almost instantly, from improving their productivity to spearheading their global sustainability efforts.</p>
                <p className="text-sm md:text-base pt-4">Our software and customer deployments prove each day that AI is revolutionizing how businesses start, grow and maintain there operations globally. We are continuously innovating to solve the most complex professional challenges and enable better business and personal life outcomes; Our work is not always easy, but it is ambitious and rewarding. So, we’re looking for people who love a challenge. People who are happiest when they’re solving problems and collaborating with the industry’s best and brightest. That’s the Clikkle way. It’s how we do things that might appear impossible. How we develop our employees’ strengths and unlock their potential. How we find meaning in everything we do.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Job Description </h2>
                <p className="text-sm md:text-base">We are looking for freshers with a keen eye for design for the position of front end developer. Front end developers are responsible for ensuring the alignment of web design and user experience requirements, optimizing web pages for maximum efficiency, and maintaining brand consistency across all web pages, among other duties.Front end developers are required to work in teams alongside back end developers, graphic designers, and user experience designers to ensure all elements of web creation are consistent. This requires excellent communication and interpersonal skills.  </p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Key Responsibilities</h2>
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
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Qualification</h2>
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
                  <button onClick={handleApply} className="text-white dark:text-white border border-black-500 px-6 py-2 rounded-md bg-blue-500">
                    Apply Now
                    </button>
             </div>
             <FooterBlock/>
        </div>
    );
};



export default Fed;
