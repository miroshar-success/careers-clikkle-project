import { Divider } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faWallet, faBriefcase, faLocationDot, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import FooterBlock from "./footer";

const GDesigner: React.FC = () => {

    const navigate = useNavigate();

    const handleApply = () => {
        navigate("/apply-for-job", { state: { role: "Graphics Designer" } });
    }

    return (
        <div className="flex flex-col h-screen mx-8 md:mx-16 lg:mx-24 xl:mx-32 gap-4 dark:text-zinc-500">
            <Link to="/">
                <button className="dark:text-white text-zinc-500 text-lg font-bold"><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
            </Link>
            <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4">Graphics Designer</h1>
            <div className="flex flex-col dark:text-zinc-400 md:flex-row gap-8 mt-5">
                <div className="flex items-center"><FontAwesomeIcon icon={faWallet} /> <span className="ml-2">27,000 Cad</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faBriefcase} /> <span className="ml-2">1 years</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faLocationDot} /> <span className="ml-2">Remote</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faLayerGroup} /> <span className="ml-2">Marketing</span></div>
            </div>
            <Divider />
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">About Clikkle…</h2>
                <p className="text-sm md:text-base">Clikkle Technologies is disrupting the SaaS sector by making the hype of AI a reality. Our AI platforms are becoming the most in-demand solution on the market because we put the power of AI in the hands of businesses, who can now unleash the value in their data and operations in ways they’ve never been able to before! We are helping the world’s largest companies drive impactful results, almost instantly, from improving their productivity to spearheading their global sustainability efforts.</p>
                <p className="text-sm md:text-base pt-4">Our software and customer deployments prove each day that AI is revolutionizing how businesses start, grow and maintain there operations globally. We are continuously innovating to solve the most complex professional challenges and enable better business and personal life outcomes; Our work is not always easy, but it is ambitious and rewarding. So, we’re looking for people who love a challenge. People who are happiest when they’re solving problems and collaborating with the industry’s best and brightest. That’s the Clikkle way. It’s how we do things that might appear impossible. How we develop our employees’ strengths and unlock their potential. How we find meaning in everything we do.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Job Description </h2>
                <p className="text-sm md:text-base">This is a full-time remote role for a Graphic Designer at Clikkle. The Graphic Designer will be responsible for developing and designing visual concepts, creating graphics and layouts, and producing marketing materials, among other tasks. The candidate will also collaborate with cross-functional teams to understand project requirements, create design solutions, and ensure consistency of branding across various platforms and media. </p>
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
                  <button onClick={handleApply} className="text-white dark:text-white border border-black-500 px-6 py-2 rounded-md bg-blue-500">
                    Apply Now
                    </button>
             </div>
             <FooterBlock/>
        </div>
    );
};



export default GDesigner;
