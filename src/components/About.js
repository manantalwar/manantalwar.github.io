import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex md:flex-row flex-col pt-10 pr-10">
        <div className="flex flex-wrap">
            <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex m-auto hover:scale-105 duration-150 text-white hover:text-black">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 hover:bg-red-500">
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
                    <p class="leading-relaxed text-sm text-justify">Donner du goût ? de la couleur aux applications, je le fais afin de rendre vos sites attrayants ?. Avant de devenir webdesigner, depuis tout petit j'étais déjà familier à la couleur et du dessin.</p>
                  </div>
                </div>
            </div>
            <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col text-white hover:scale-105 duration-150 hover:text-black">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 flex-1 hover:bg-yellow-500">
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
                    <p class="leading-relaxed text-sm text-justify">
                    Donner du goût ? de la couleur aux applications, je le fais afin de rendre vos sites attrayants ?. Avant de devenir webdesigner, depuis tout petit j'étais déjà familier à la couleur et du dessin. 
                    </p>
                  </div>
                </div>
            </div>
            <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col hover:scale-105 duration-150 text-white hover:text-black">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 flex-1 hover:bg-green-500">
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
                    <p class="leading-relaxed text-sm text-justify">
                    Donner du goût ? de la couleur aux applications, je le fais afin de rendre vos sites attrayants ?. Avant de devenir webdesigner, depuis tout petit j'étais déjà familier à la couleur et du dessin. 
                    </p>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
}
