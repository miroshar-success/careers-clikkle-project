import { Divider } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faWallet, faBriefcase, faLocationDot, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import FooterBlock from "./footer";

const PortalPage: React.FC = () => {
    const navigate = useNavigate();

    const handleApply = () => {
        navigate("/apply-for-job", { state: { role: "Full Stack Developer" } });
    }
   

    return (
        <div className="flex flex-col h-screen mx-8 md:mx-16 lg:mx-24 xl:mx-32 gap-4 dark:text-zinc-500">
            <Link to="/">
                <button className="dark:text-white text-zinc-500 text-lg font-bold"><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
            </Link>
            <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4">Full Stack Developer</h1>
            <div className="flex flex-col dark:text-zinc-400  md:flex-row gap-8 mt-5">
                <div className="flex items-center"><FontAwesomeIcon icon={faWallet} /> <span className="ml-2">37,000 Cad</span></div>
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
                <p className="text-sm md:text-base">
                As an AWS Full Stack Developer you will play a pivotal role in designing, implementing, and maintaining scalable and efficient software solutions anchored in the Amazon Web Services ecosystem. You will be responsible for both front-end and back-end development, ensuring seamless integration with AWS services and optimizing performances across the entire application stack. You will have deep expertise in AWS services and experience working in a fast-paced startup environment with a strong dedication to success.  </p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Key Responsibilities</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>Design, develop, and maintain both front-end and back-end components of web applications by implementing responsive and user-friendly interfaces using modern front-end frameworks and technologies.</li>
                    <li>Heavily utilize AWS services and resources in the entire stack to develop, deploy, and scale applications. </li>
                    <li>Collaborate in cross-functional teams. </li>
                    <li>Understands that it is just as important to document code, processes, and architecture to facilitate knowledge transfer and future development. </li>
                    <li>Deliver software in agile, leveraging project management tools like JIRA. </li>
                    <li>Facilitate and influence decision-making processes for developing AWS-based applications by drawing on past experiences. </li>
                    
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Qualification</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>Extensive experience with both front-end and back-end development</li>
                    <li>Proficiency in JavaScript, HTML, CSS and at least one modern front-end frameworks such as React, Angular or Vue.js, as well as at least one modern back-end framework, such as mern stack, react, Node.js, Django or Ruby on Rails</li>
                    <li>Experience with databases such as MySQL, PostgreSQL, and MongoDB</li>
                    <li>Experience with infastructures such as aws and azure</li>
                    <li>Expertise in software architecture, application design and development, and web services (REST, SOAP, etc.)</li>
                    <li>Deep understanding of Agile principles and experience working within agile teams</li>
                    <li>Excellent communication and collaboration skills</li>
                    <li>Bachelor's degree in Computer Science or related field (preferred)</li>
                    <li>Demonstrated understanding of DevOps principles and experience working with AWS or Azure</li>
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
                  <button onClick={handleApply} className="text-white dark:text-white border border-black-500 px-6 py-2 rounded-md bg-blue-500">
                    Apply Now
                    </button>
             </div>
             <FooterBlock/>
        </div>
    );
};

export default PortalPage;
