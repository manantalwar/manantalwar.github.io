import React from "react";
import { projects } from "../content/projects_list";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-300 bg-gray-900 body-font px-10 py-20">
      <div className="container px-5 mx-auto">
        <div class="text-center">
          <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Projects</h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">I bring ideas to life.</p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap container px-5 py-10 mx-auto text-center lg:px-4">
          {projects.map((proj) => (
              <div class="md:w-1/2 lg:w-1/3 py-4 px-4 transform hover:scale-105 duration-150" >
                <div class="relative m-auto">
                  <div class="z-50 p-3 mt-10 max-w-s w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-800 shadow-lg">
                  <div class="top mb-2 flex">
                    <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                    <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <img src={require('../img/' + proj.image)} className="h-32 rounded-lg w-full object-cover" />
                  </div>
                    <div class="font-semibold text-xl mb-2 ml-2 text-white py-2">{proj.title}</div>
                    <div class="flex m-auto pb-2">
                      {proj.buttons.map((lst) => (
                        <a href={lst['link']}>
                          <button class="transform mouse-pointer bg-yellow-500 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 hover:scale-90 focus:bg-gray-700  focus:outline-none">
                            {lst['name']}
                          </button>
                        </a>
                      ))}
                    </div>
                    <div class="my-2 mx-2 mr-5">
                      <p class="text-gray-300 text-sm text-justify">
                        {proj.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap">
                      {proj.skills.map((cur) => (
                      <div className="flex flex-wrap">
                        <div className="p-1"><span class="transform transition-all duration-150 inline-block bg-transparent rounded px-1 py-1  text-xs font-thin text-white border hover:scale-105">{cur}</span></div>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>	
          ))}
        </div>
      </div>
    </section>
  );
}