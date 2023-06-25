import { experiences } from "../experiences_info";
import React from "react";

export default function Experiences(){
    return (
        <section id="experience" className="text-gray-400 bg-gray-900 body-font max-w-6xl mx-auto px-10 py-20">
            <div className="text-center py-24">
                <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Experience</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">I work!</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <div>
                {experiences.map((exp) => (
                <div className="container px-5 mx-auto hover:scale-105 duration-150">
                    <div className="p-10 bg-gray-800 flex items-center mx-auto mb-10 rounded-lg sm:flex-row flex-col">
                        {/*<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                            <img
                            src={exp.image}/>
                </div>*/}
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h1 className="text-white text-2xl title-font font-bold mb-2">{exp.title}</h1>
                            <h1 className="text-yellow-500 text-xl title-font font-bold mb-2">{exp.company}</h1>
                            <h1 className="text-red-500 text-l title-font font-bold mb-2">{exp.duration}</h1>
                            <p className="leading-relaxed text-base list-disc text-justify">
                                {exp.description.map((lst) => (
                                    <li>{lst}</li>
                                ))}
                            </p>
                            <div className="py-4">
                                {exp.skills.map((skill) => (
                                    <div className=" inline-block mr-2" >
                                        <div className="flex  pr-2 h-full items-center">
                                            <svg className="text-green-500 w-6 h-6 mr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                                                <path stroke="none" d="M0 0h24v24H0z"/>  
                                                <circle cx="12" cy="12" r="9" />  
                                                <path d="M9 12l2 2l4 -4" />
                                            </svg>
                                            <p className="title-font font-medium">{skill}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <a className="mt-3 text-indigo-500 inline-flex items-center bg-white rounded p-2">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
}