import { Divider } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faWallet, faBriefcase, faLocationDot, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import FooterBlock from "./footer";

const DataArchitect: React.FC = () => {

    const navigate = useNavigate();

    const handleApply = () => {
        navigate("/apply-for-job", { state: { role: "Data Architect" } });
    }

    return (
        <div className="flex flex-col h-screen mx-8 md:mx-16 lg:mx-24 xl:mx-32 gap-4 dark:text-zinc-500">
            <Link to="/">
                <button className="dark:text-white text-zinc-500 text-lg font-bold"><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
            </Link>
            <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4">Data Architect/Engineer</h1>
            <div className="flex flex-col dark:text-zinc-400 md:flex-row gap-8 mt-5">
                <div className="flex items-center"><FontAwesomeIcon icon={faWallet} /> <span className="ml-2">41,000 Cad</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faBriefcase} /> <span className="ml-2">5 years</span></div>
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
                <p className="text-sm md:text-base"> This role requires Canadian Enhanced Reliability Security clearance. In this role, the Data Engineer will perform analysis and provide designs/solutions for various projects consistent with the corporate data architecture. The Experience Platform (XP) is a modern platform providing world class interactions for our Clients, Advisors, and Partners. This Platform will deliver data and analytic services through approaches such as streaming, APIs, micro-services (containerization), and cloud services. </p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Key Responsibilities</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                   <li>Will play an active role in Mongo engineering across - Full lifecycle implementation from requirements analysis, platform selection and setup, technical architecture design, application design and development, testing, and deployment</li>
                   <li>Work with business users, SMEs, peer developers and other analysts to deliver high quality data models, architectural designs</li>
                   <li>Develop MongoDB schema design by applying the suitable design patterns based on specific use cases.</li>
                   <li>Develop and maintain conceptual, logical, and physical data models</li>
                   <li>Contribute to analysis, solution design, development, and implementation of operational and data warehouse projects.</li>
                   <li>Setup the physical data model including all physical database configurations such as indexes, tablespaces, table partitions, table constraints, relationships, etc.</li>
                   <li>Drive innovation by keeping current on relevant data trends via researching, presenting, and accurately articulating the benefits and goals of data architecture related technologies, such as Big Data, Cloud technologies, Kafka, and NoSQL</li>
                   <li>Expect to work with a fast-paced large agile team on complete software delivery lifecycle.Provide technical and data leadership to the application development group, IT, and the enterprise.</li>
                   <li>Work closely with key client and IT stakeholders in understanding business needs and recommend solutions.</li>
                   <li>Collaborate with domain and enterprise architects for delivery in compliance to strategic enterprise direction</li>
                   <li>Create and maintain data architecture, data management standards and conventions, data naming standards, and metadata standards to ensure effective availability, scalability, security, and integrity of data assets.</li>
                   
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-xl dark:text-zinc-300 mb-2">Qualifications</h2>
                <ul className="list-disc pl-4 text-sm md:text-base">
                    <li>Has designed high performant Mongo DB Collections, Document schemas.</li>
                    <li>Has hands on experience on data sync strategies from Kafka to Mongo Sync connector-based architectures.</li>
                    <li>Has extensive architecture, design and implementation experience on MongoDB</li>
                    <li>Has architected, designed and implement sharding and indexing strategies for MongoDB</li>
                    <li>Strong analytical and problem-solving abilities</li>
                    <li>Experience in Database design, administration, and security management</li>
                    <li>Knowledge of MongoDB administration, installation, troubleshooting in AWS environments</li>
                    <li>In-depth understanding of MongoDB architecture</li>
                    <li>10+ years of overall experience in IT. Experience with databases in Commercial cloud (Google Cloud Platform, Azure, AWS), SQL Server, Oracle, DB2, PostgreSQL and Redshift is preferred, and IMS (optional),</li>
                    <li>Strong working experience of data modeling, data warehousing, metadata management, database design and development 5+ years.</li>
                    <li>Logical and physical data modelling – 7+ years (dimensional and 3NF). In addition to all the traditional modelling techniques, the incumbent must also possess the knowledge to create logical data models using the Class Modelling technique as well the Generic Data Modelling approach.</li>
                    <li>Experience with data modeling using PowerDesigner and/or ER/Studio (for mongoDB)</li>
                    <li>Familiar with MongoDB Schema Design Patterns and the applicable use cases, solid design and working experience with MongoDB – 2+ years</li>
                    <li>Excellent communication, presentation, and interpersonal skills</li>
                    <li>Solid business and technical acumen, with demonstrated agility in learning and ability to become comfortable with unfamiliar businesses areas or technologies</li>
                    <li>Ability to work in a dynamic environment with changing priorities</li>
                    <li>Strong relationship management and consulting skills</li>
                    <li>Solid written and verbal communication skills</li>
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



export default DataArchitect;
