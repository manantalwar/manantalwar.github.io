import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-10 py-20 mx-auto">
        <div class="text-center mb-10">
          <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Skills</h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">A list of technical skills I have.</p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="text-center mb-5">
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Programming Languages</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
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
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Frameworks</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
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
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Technologies</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
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
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Competencies</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
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