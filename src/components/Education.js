import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Education() {
    return(
        <section id="education" className="text-gray-400 bg-gray-900 body-font px-10 py-20">
			<div class="text-center pb-20">
				<h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Education</h1>
				<p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">I am a student!</p>
				<div class="flex mt-6 justify-center">
					<div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
				</div>
          	</div>
		  	<div className="container mx-auto flex md:flex-row flex-col items-center">
				<div>
					<Player
					autoplay
					loop
					src="https://assets7.lottiefiles.com/packages/lf20_ei2gf306.json"
					style={{ height: '200%', width: '100%' }}
					>
						<Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
					</Player>
				</div>
        		<div class="max-w-2xl mx-auto">
					<ol class="relative border-l border-gray-200 dark:border-gray-700">
						<li class="mb-10 ml-4">
							<div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
							<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2022 - August 2022</time>
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Manning CICS, UMass Amherst</h3>
							<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
							<a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> Learn more 
								<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
						</li>
						<li class="mb-10 ml-4">
							<div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
							<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2022 - August 2022</time>
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Manning CICS, UMass Amherst</h3>
							<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
							<a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> Learn more 
								<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
						</li>
						<li class="mb-10 ml-4">
							<div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
							<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2022 - August 2022</time>
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Manning CICS, UMass Amherst</h3>
							<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
							<a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> Learn more 
								<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
						</li>
					</ol>
				</div>
			</div>
		</section>
    );
}