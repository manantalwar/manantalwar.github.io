import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex md:flex-row flex-col pt-10 pr-10">
        <div className="flex flex-wrap">
            <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex m-auto hover:scale-105 duration-150 text-white">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                  <div class="top mb-2 flex">
                    <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                    <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl title-font font-medium mb-3">Software Developer</h2>
                  </div>
                  <div>
                    <Player
                      autoplay
                      loop
                      src="https://assets4.lottiefiles.com/packages/lf20_1bdm0t0m.json"
                      style={{ height: '100%', width: '100%' }}
                    >
                      <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                  </div>
                  <div class="flex-grow ">
                    <p class="leading-relaxed text-sm text-justify text-gray-300"> I am driven by my passion for technology and my desire to create innovative solutions that have a positive impact on people's lives. From a young age, I have been fascinated by the potential of computers and their ability to transform ideas into reality.</p>
                  </div>
                </div>
            </div>
            <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col text-white hover:scale-105 duration-150">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 flex-1">
                  <div class="top mb-2 flex">
                    <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                    <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div class="text-center">
                      <h2 class="text-xl title-font font-medium mb-3">Data Scientist</h2>
                  </div>
                  <div>
                    <Player
                      autoplay
                      loop
                      src="https://assets3.lottiefiles.com/packages/lf20_qufi1zre.json"
                      style={{ height: '100%', width: '100%' }}
                    >
                      <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-sm text-justify text-gray-300">
                    I am captivated by the power of data and its ability to unveil valuable insights and drive informed decision-making. With a passion for problem-solving, I thrive on the challenge of extracting meaningful patterns from complex datasets. 
                    </p>
                  </div>
                </div>
            </div>
            <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col hover:scale-105 duration-150 text-white">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 flex-1">
                  <div class="top mb-2 flex">
                    <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                    <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div class="text-center">
                      <h2 class=" text-xl title-font font-medium mb-3">Product Manager</h2>
                  </div>
                  <div>
                    <Player
                      autoplay
                      loop
                      src="https://assets3.lottiefiles.com/packages/lf20_9wpyhdzo.json"
                      style={{ height: '100%', width: '100%' }}
                    >
                      <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-sm text-justify text-gray-300">
                    I excel at understanding user needs, driving innovation, and delivering exceptional products. With a strategic mindset and a passion for customer-centric design, I lead cross-functional teams to deliver impactful solutions and drive business growth. 
                    </p>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
}
