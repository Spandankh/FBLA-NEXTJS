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
						<div className="absolute bottom-0 left-0 w-full overflow-hidden block">
							<svg
								className="h-20 w-full "
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 1440 320"
								preserveAspectRatio="none"
							>
								<path
									className="text-white fill-current"
									fillOpacity="0.99"
									d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
								></path>
							</svg>
						</div>
					</div>
					<MaxWidthWrapper>
						<div className="relative md:text-center flex flex-col justify-center mt-10 my-20 md:items-baseline md:mt-20">
							<h1 className="text-[38px] md:text-[54px] text-white font-bold">About Wario</h1>
							<p className="md:text-[24px] text-white font-semibold tracking-light ">
								Explore our rich history!
							</p>
							<Link
								href="/career"
								className="bg-blue-500 text-white mt-10 p-3 max-w-[230px] justify-center flex md:w-1/6 rounded-[.5rem] hover:bg-blue-600"
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
						className="text-[#F3F3F3] fill-current"
						fillOpacity="0.99"
						d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
					></path>
				</svg>
				<History />

				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						className="text-[#F3F3F3] fill-current"
						fillOpacity="1"
						d="M0,224L48,197.3C96,171,192,117,288,90.7C384,64,480,64,576,101.3C672,139,768,213,864,208C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
					></path>
				</svg>
			</section>
			{/*Core Value*/}

			<section className="">
				<div className="">
					<div className="text-center">
						<h1 className="text-[#19224a] text-5xl font-bold pb-5">Our Core Values</h1>
						<p className="text-2xl pb-5">Some more Random Text Woooo Some more Random Text Woooo!</p>
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
						className="text-[#F3F3F3] fill-current"
						fillOpacity="0.99"
						d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
					></path>
				</svg>

				<div className="bg-[#F3F3F3]">
					<div className="text-center">
						<h1 className="text-[#19224a]  text-5xl font-bold p-5">What People Say About Us</h1>
					</div>

					<WorkerReview />
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						className="text-[#F3F3F3] fill-current"
						fillOpacity="1"
						d="M0,224L48,197.3C96,171,192,117,288,90.7C384,64,480,64,576,101.3C672,139,768,213,864,208C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
					></path>
				</svg>
			</section>
			{/*Call to Action*/}

			<section className="mt-3">
				<div className="p-5 text-center">
					<div className="bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text text-transparent text-4xl md:text-6xl font-bold pb-4">
						What are you waiting for?
					</div>
					<div className="text-3xl mb-4">Join Us In This Journey</div>
					<Link
						href="/career"
						className="bg-blue-500 text-white mt-5 p-5 max-w-[230px]  backdrop: md:w-1/6 rounded-[10px] hover:bg-blue-600 inline-block"
					>
						View Open Postions
					</Link>
				</div>
			</section>
		</>
	)
}
