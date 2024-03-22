import { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import './apply-for-job.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const ApplyForJob = () => {

    const [selected, setSelected] = useState("US");

    const location = useLocation();
    const { role } = location.state;

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },)

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const formEle = document.querySelector('form')!;
        console.log(formEle)
        const formData = new FormData(formEle);

        try {
            const res = await axios.post('http://localhost:3001/form', { ...formData }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const data = res.data;
            console.log(data);
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="flex flex-col h-screen mx-8 md:mx-16 lg:mx-24 xl:mx-32 gap-4 dark:text-zinc-500">

            <nav className="flex mt-6" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link to="/" className="inline-flex items-center px-1 text-sm font-medium text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            Career
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span onClick={() => navigate(-1)} className="ms-1 text-sm font-medium cursor-pointer text-blue-600 md:ms-2 px-1 dark:text-gray-400 dark:hover:text-white">{role}</span>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 px-1 md:ms-2 dark:text-gray-400">Apply</span>
                        </div>
                    </li>
                </ol>
            </nav>


            <form className="w-full mb-8" onSubmit={handleSubmit}>
                <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4 mb-8">Personal Details</h1>
                <div className="formInputGrid gap-20 mb-6 sm:gap-10">
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="firstName" >
                            First Name
                        </label>
                        <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="firstName" name="firstName" type="text" placeholder="Enter First Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="lastName" >
                            Last Name
                        </label>
                        <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="lastName" name="lastName" type="text" placeholder="Enter Last Name" />
                    </div>
                </div>

                <div className="formInputGrid gap-20 mb-6">
                    <div className="mb-4 w-full">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="email" >
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="email" name="email" type="email" placeholder="Enter Email" />
                    </div>

                    <div className="mb-4 w-full">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="phone" >
                            Phone Number
                        </label>
                        <div className="flex items-center">
                            <ReactFlagsSelect
                                selected={selected}
                                onSelect={(code) => setSelected(code)}
                                className="w-16"
                                showSelectedLabel={false}
                                showSecondaryOptionLabel={false}
                                showOptionLabel={false}
                                selectedSize={22}
                            />
                            <input className="flex-1 shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-3 dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="phone" name="phone" type="text" placeholder="Enter Phone Number" />
                        </div>
                    </div>
                </div>

                <div className="formInputGrid gap-20 mb-6">
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="dob" >
                            D.O.B
                        </label>
                        <div className="dobGrid">
                            <select name="month" id="month" className="border shadow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-slate-600 dark:placeholder-slate-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" disabled selected>Month</option>
                            </select>
                            <select name="day" id="day" className="border shadow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-slate-600 dark:placeholder-slate-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" disabled selected>Day</option>
                            </select>
                            <select name="year" id="year" className="border shadow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-slate-600 dark:placeholder-slate-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" disabled selected>Year</option>
                            </select>
                        </div>

                    </div>
                    <div className="mb-6">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="jobRole" >
                            Job Role
                        </label>
                        <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="jobRole" type="text" placeholder="Enter Job Role" />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="experience" >
                        Years of Experience
                    </label>
                    <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="experience" type="number" placeholder="Enter Whole Numbers Only" />
                </div>

                <div className="mb-6">
                    <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="address" >
                        Address
                    </label>
                    <textarea className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="address" rows={5} placeholder="Enter Address" />
                </div>

                <div className="formInputGrid gap-20 mb-6">
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="cityName" >
                            City Name
                        </label>
                        <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="cityName" type="text" placeholder="Enter City Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="postal" >
                            Postal Code
                        </label>
                        <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="postal" type="text" placeholder="Enter Postal Code" />
                    </div>
                </div>

                <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4 mb-8">Education</h1>
                <div className="formInputGrid gap-20 mb-6">
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="school" >
                            School
                        </label>
                        <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="school" type="text" placeholder="Enter School Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="fieldOfStudy" >
                            Field Of Study
                        </label>
                        <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="fieldOfStudy" type="text" placeholder="Enter Field Of Study" />
                    </div>
                </div>
                <div className="mb-2">
                    <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="edSummary" >
                        Summary
                    </label>
                    <textarea className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="edSsummary" rows={5} placeholder="Summary" />
                </div>
                <div className="mb-5">
                    <button type="button" className="d-block bg-transparent text-sky-600 text-sm">Delete</button>
                </div>
                <div className="mb-8">
                    <button type="button" className="bg-transparent text-sky-600">+ Add Education</button>
                </div>

                <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4 mb-2">Experience</h1>
                <h3 className="text-gray-400 text-sm mb-6">Work History</h3>
                <div className="formInputGrid gap-20 mb-6">
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="company" >
                            Company Name
                        </label>
                        <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="company" type="text" placeholder="Enter Company Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="position" >
                            Position
                        </label>
                        <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="position" type="text" placeholder="Enter Position Title" />
                    </div>
                </div>
                <div className="formInputGrid gap-20 mb-6">
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="startDate" >
                            Start Date
                        </label>
                        <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="startDate" type="date" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="endDate" >
                            End Date
                        </label>
                        <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="endDate" type="date" />
                    </div>
                </div>
                <div className="mb-2">
                    <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="workSummary" >
                        Summary
                    </label>
                    <textarea className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="workSsummary" rows={5} placeholder="Summary" />
                </div>
                <div className="mb-5">
                    <button type="button" className="d-block bg-transparent text-sky-600 text-sm">Delete</button>
                </div>
                <div className="mb-8">
                    <button type="button" className="bg-transparent text-sky-600">+ Add Position</button>
                </div>


                <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4 mb-6">Upload Documents</h1>

                <div className="mb-4">
                    <h3 className="mb-2 font-bold dark:text-white">Upload Picture</h3>
                    <button type="button" className="bg-sky-600 rounded text-white px-6 py-3">Upload Picture</button>
                    <input type="file" accept=".pdf, .docx, .txt" className="hidden" />
                </div>
                <div className="mb-4">
                    <h3 className="mb-2 font-bold dark:text-white">Resume/CV</h3>
                    <button type="button" className="bg-sky-600 rounded text-white px-6 py-3">Upload Resume/CV</button>
                    <input type="file" accept=".pdf, .docx, .txt" className="hidden" />
                </div>
                <div className="mb-4">
                    <h3 className="mb-2 font-bold dark:text-white">Cover Letter</h3>
                    <button type="button" className="bg-sky-600 rounded text-white px-6 py-3">Upload Cover Letter</button>
                    <input type="file" accept=".pdf, .docx, .txt" className="hidden" />
                </div>

                <div className="mb-8">
                    <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="coverLetter" >
                        Or type in box
                    </label>
                    <textarea className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="coverLetter" rows={5} placeholder="Cover Letter" />
                </div>

                <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4 mb-6">Socials</h1>

                <div className="formInputGrid gap-20 mb-6">
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="linkedin" >
                            Add the link to your Linkedin Profile
                        </label>
                        <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="linkedin" type="text" placeholder="Enter Profile Link" />
                    </div>
                    <div className="mb-12">
                        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="twitter" >
                            Add the link to your Twitter Profile
                        </label>
                        <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="twitter" type="text" placeholder="Enter Profile Link" />
                    </div>
                </div>

                <div className="text-center mb-16">
                    <button className="bg-sky-600 rounded text-white px-6 py-3">Submit The Application</button>
                </div>
            </form>

        </div>
    )
}

export default ApplyForJob