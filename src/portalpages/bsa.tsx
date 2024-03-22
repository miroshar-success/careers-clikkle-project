import { Divider } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faWallet, faBriefcase, faLocationDot, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import FooterBlock from "./footer";

const Bsa: React.FC = () => {

    const navigate = useNavigate();

    const handleApply = () => {
        navigate("/apply-for-job", { state: { role: "Business Systems Analyst" } });
    }

    return (
        <div className="flex flex-col h-screen mx-8 md:mx-16 lg:mx-24 xl:mx-32 gap-4 dark:text-zinc-500">
            <Link to="/">
                <button className="dark:text-white text-zinc-500 text-lg font-bold"><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
            </Link>
            <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4">Business Systems Analyst</h1>
            <div className="flex flex-col dark:text-zinc-400 md:flex-row gap-8 mt-5">
                <div className="flex items-center"><FontAwesomeIcon icon={faWallet} /> <span className="ml-2">89,000 Cad</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faBriefcase} /> <span className="ml-2">3 years</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faLocationDot} /> <span className="ml-2">Remote</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faLayerGroup} /> <span className="ml-2">Engineer</span></div>
            </div>
            <Divider />
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">About Clikkle…</h2>
                <p className="text-sm md:text-base">Clikkle Technologies is disrupting the SaaS sector by making the hype of AI a reality. Our AI platforms are becoming the most in-demand solution on the market because we put the power of AI in the hands of businesses, who can now unleash the value in their data and operations in ways they’ve never been able to before! We are helping the world’s largest companies drive impactful results, almost instantly, from improving their productivity to spearheading their global sustainability efforts.</p>
                <p className="text-sm md:text-base pt-4">Our software and customer deployments prove each day that AI is revolutionizing how businesses start, grow and maintain there operations globally. We are continuously innovating to solve the most complex professional challenges and enable better business and personal life outcomes; Our work is not always easy, but it is ambitious and rewarding. So, we’re looking for people who love a challenge. People who are happiest when they’re solving problems and collaborating with the industry’s best and brightest. That’s the Clikkle way. It’s how we do things that might appear impossible. How we develop our employees’ strengths and unlock their potential. How we find meaning in everything we do.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Job Description </h2>
                <p className="text-sm md:text-base">You will provide support and produce detailed system requirements and technical/functional specifications in alignment with standards and frameworks. This candidate will work in close partnership with business partners/technology/project teams and stakeholders to elicit, analyze, document, communicate and manage detailed functional specifications. </p>
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
                  <button onClick={handleApply} className="text-white dark:text-white border border-black-500 px-6 py-2 rounded-md bg-blue-500">
                    Apply Now
                    </button>
             </div>
             <FooterBlock/>
        </div>
    );
};



export default Bsa;
