import { Divider } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faWallet, faBriefcase, faLocationDot, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import FooterBlock from "./footer";

const DigitalA: React.FC = () => {
    const navigate = useNavigate();

    const handleApply = () => {
        navigate("/apply-for-job", { state: { role: "Digital Analytics Implementation Specialist" } });
    }
    return (
        <div className="flex flex-col h-screen mx-8 md:mx-16 lg:mx-24 xl:mx-32 gap-4 dark:text-zinc-500">
            <Link to="/">
                <button className="dark:text-white text-zinc-500 text-lg font-bold"><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
            </Link>
            <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4">Digital Analytics Implementation Specialist</h1>
            <div className="flex flex-col dark:text-zinc-400 md:flex-row gap-8 mt-5">
                <div className="flex items-center"><FontAwesomeIcon icon={faWallet} /> <span className="ml-2">42,000 Cad</span></div>
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
                <p className="text-sm md:text-base">Solve traffic tracking problems that leave other scratching their heads. Dive deep into unique analytics implementations covering multiple sites, dynamic sites, complex client-side deployments, mobile sites and apps. If you have experience, that’s great. If you don’t but have the potential, we’ll train you.</p>
                <p className="text-sm md:text-base">ClickInsight is a leading specialist in digital analytics and online marketing optimization. We are a Google Certified Partner in both Google Analytics and Google AdWords. We help marketers and entrepreneurs innovatively grow their businesses through the innovative use of data. To that end, the quality of the data has to be reliable. We provide consulting, training, and auditing services to ensure web analytics data is correct and marketing campaigns are efficient and effective.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Key Responsibilities</h2>
                <p className="text-sm md:text-base">Reporting to the Manager, Digital Analytics, the Analytics Implementation Specialist will enable these efforts through the following actions:</p>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>Provide technical support to internal and client teams around web analytics tagging, tool configuration and data validation.</li>
                    <li>Assess analytics implementation completeness, identify gaps and recommend analytics configuration and custom JavaScript coding solutions following internal standard processes and best practices.</li>
                    <li>Prepare, optimize, test, and debug custom analytics tracking code.</li>
                    <li>Configure analytics tools.</li>
                    <li>Troubleshoot web analytics data problems and implementations.</li>
                    <li>Create technical and non-technical instructions for client internal technical staff.</li>
                    <li>Build and maintain select analytics reports and dashboards.</li>
                    <li>Support team members during the analysis of web analytics and offline data.</li>
                    <li>Contribute to client training and assist with other related projects.</li>
                    
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Qualifications</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>1+ years of relevant work experience.</li>
                    <li>A Bachelor’s degree in computer science, statistics, business, finance, psychology or other quantitative field.</li>
                    <li>Referenceable ability to gather business requirements, think critically, create best-fit solutions to meet clients’ needs and produce documentation for internal and client use.</li>
                    <li>Front end developer capabilities in JavaScript, jQuery, HTML5 and CSS.</li>
                    <li>Demonstrated ability to develop and customize code, to design and perform robust quality control tests and to prepare usable technical documentation.</li>
                    <li>Familiarity with different web development platforms and programming languages.</li>
                    <li>Web analytics knowledge and experience with at least one web analytics tool.</li>
                    <li>Project management experience. Be able to work on multiple projects concurrently.</li>
                    
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



export default DigitalA;
