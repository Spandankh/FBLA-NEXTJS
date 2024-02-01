import WorkerReview from '@/components/about/WorkerReviews'
import AboutUs from '@/components/about/AboutUs'
import CoreValue from '@/components/about/CoreValue'
import History from '@/components/about/History'

import Image from 'next/image'
import LandingCover from '../../../public/images/samuel-girven-fqMu99l8sqo-unsplash.jpg'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'

export default async function Mission() {
	return (
		<>
			<section className="mb-10">
				<div className=" relative h-[45vh] overflow-hidden ">
					<div className="">
						<Image
							alt="Mountains"
							src={LandingCover}
							placeholder="blur"
							quality={100}
							fill
							className="brightness-50"
							style={{ objectFit: 'cover' }}
						/>
						<div className="absolute bottom-0 left-0 block w-full overflow-hidden">
							<svg
								className="h-20 w-full "
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 1440 320"
								preserveAspectRatio="none"
							>
								<path
									className="fill-current text-white"
									fillOpacity="0.99"
									d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
								></path>
							</svg>
						</div>
					</div>
					<MaxWidthWrapper>
						<div className="relative my-20 mt-10 flex flex-col justify-center md:mt-20 md:items-baseline md:text-center">
							<h1 className="text-[38px] font-bold text-white md:text-[54px]">About Wario</h1>
							<p className="tracking-light font-semibold text-white md:text-[24px] ">
								Explore our rich history!
							</p>
							<Link
								href="/career"
								className="mt-10 flex max-w-[230px] justify-center rounded-[.5rem] bg-blue-500 p-3 text-white hover:bg-blue-600 md:w-1/6"
							>
								See Open Position
							</Link>
						</div>
					</MaxWidthWrapper>
				</div>
			</section>
			{/*About Us*/}

			<section className="mt-10">
				<AboutUs />
			</section>
			{/*History*/}
			<section className="mt-10">
				<svg
					className="h-24 w-full"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					preserveAspectRatio="none"
				>
					<path
						className="fill-current text-[#F3F3F3]"
						fillOpacity="0.99"
						d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
					></path>
				</svg>
				<History />

				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						className="fill-current text-[#F3F3F3]"
						fillOpacity="1"
						d="M0,224L48,197.3C96,171,192,117,288,90.7C384,64,480,64,576,101.3C672,139,768,213,864,208C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
					></path>
				</svg>
			</section>
			{/*Core Value*/}

			<section className="">
				<div className="">
					<div className="text-center">
						<h1 className="pb-5 text-5xl font-bold text-[#19224a]">Our Core Values</h1>
						<p className="pb-5 text-2xl">Driven by Purpose, Guided by Values!</p>
					</div>
					<CoreValue />
				</div>
			</section>
			{/*Reviews*/}

			<section className="mt-10">
				<svg
					className="h-24 w-full"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					preserveAspectRatio="none"
				>
					<path
						className="fill-current text-[#F3F3F3]"
						fillOpacity="0.99"
						d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
					></path>
				</svg>

				<div className="bg-[#F3F3F3]">
					<div className="text-center">
						<h1 className="p-5  text-5xl font-bold text-[#19224a]">What People Say About Us</h1>
					</div>

					<WorkerReview />
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						className="fill-current text-[#F3F3F3]"
						fillOpacity="1"
						d="M0,224L48,197.3C96,171,192,117,288,90.7C384,64,480,64,576,101.3C672,139,768,213,864,208C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
					></path>
				</svg>
			</section>
			{/*Call to Action*/}

			<section className="mb-5 mt-3">
				<div className="p-5 text-center">
					<div className="bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text pb-4 text-4xl font-bold text-transparent md:text-6xl">
						What are you waiting for?
					</div>
					<div className="mb-4 text-3xl">Join Us In This Journey</div>
					<Link
						href="/career"
						className="backdrop: mt-5 inline-block max-w-[230px] rounded-[10px]  bg-blue-500 p-5 text-white hover:bg-blue-600 md:w-1/6"
					>
						View Open Postions
					</Link>
				</div>
			</section>
		</>
	)
}
