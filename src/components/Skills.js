import React from "react";
import { programming, frameworks, technologies, competencies } from "../content/skills_list";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-10 py-20 mx-auto">
        <div class="text-center mb-10 text-gray-300">
          <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Skills</h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">I possess a comprehensive skill set that encompasses both technical proficiencies and key soft skills. Through my extensive experience in the field, I have honed my abilities to effectively design, develop, and deliver high-quality software solutions. My skills enable me to navigate complex challenges and contribute to the success of software projects.</p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
        </div>
        <div class="text-center mb-5">
          <p class="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl font-bold text-gray-300">Programming Languages</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {programming.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/4 w-full rounded hover:scale-105 duration-150">
              <div className="bg-yellow-500 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div class="text-center mb-5 mt-5">
          <p class="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl font-bold text-gray-300">Frameworks</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {frameworks.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/4 w-full rounded hover:scale-105 duration-150">
              <div className="bg-indigo-500 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div class="text-center mb-5 mt-5">
          <p class="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl font-bold text-gray-300">Technologies</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {technologies.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/4 w-full rounded hover:scale-105 duration-150">
              <div className="bg-green-500 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div class="text-center mb-5 mt-5">
          <p class="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl font-bold text-gray-300">Competencies</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {competencies.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/4 w-full rounded hover:scale-105 duration-150">
              <div className="bg-red-500 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}