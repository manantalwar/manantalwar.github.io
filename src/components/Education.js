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
							<div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
							<time class="mb-1 text-sm font-normal leading-none text-gray-400 ">January 2023 - (Expected) May 2024</time>
							<h3 class="text-lg font-semibold text-white ">Master of Science in Computer Science</h3>
							<p class="text-base font-normal text-white ">Manning College of Information and Computer Sciences</p>
							<p class="mb-4 text-base font-normal text-white">University of Massachusetts Amherst</p>
							<p class="mb-4 text-base font-normal text-gray-400 ">GPA: 4.00/4.00 </p>
							<p class="mb-4 text-base font-normal text-gray-400 ">Coursework: Advanced Machine Learning, Biologically Inspired Deep Learning, Intelligent Tutoring Systems, Quantum Error Correction, Advanced Information Assurance, Technical Project Management, Research Methods in Empirical Computer Science</p>
							<p class="mb-4 text-base font-normal text-gray-400 ">Honors: Manning CICS Bay State Fellowship</p>
						</li>
						<li class="mb-10 ml-4">
							<div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
							<time class="mb-1 text-sm font-normal leading-none text-gray-400 ">August 2020 - December 2022</time>
							<h3 class="text-lg font-semibold text-white ">Bachelor of Science in Computer Science & Mathematics</h3>
							<p class="text-base font-normal text-white ">Manning College of Information and Computer Sciences</p>
							<p class="mb-4 text-base font-normal text-white">University of Massachusetts Amherst</p>
							<p class="mb-4 text-base font-normal text-gray-400 ">GPA: 3.92/4.00 (Cum Laude) </p>
							<p class="mb-4 text-base font-normal text-gray-400 ">Coursework: Object Oriented Programming, Data Structures & Algorithms, Programming Methodology, Computer Systems Principles, Theory of Computation, Advanced Algorithm Design, Machine Learning, Health Informatics & Data Science, Information Retrieval, Software Engineering, Web Programming, Algorithms for Data Science</p>
							<p class="mb-4 text-base font-normal text-gray-400">Honors: Chancellor’s Merit Award, Dean’s List Award, Dr. Howard Smith Research Award</p>
						</li>
					</ol>
				</div>
			</div>
		</section>
    );
}