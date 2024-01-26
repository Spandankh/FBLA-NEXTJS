import Image from 'next/image'
import CareerLanding from '../../../public/images/CareerLandingHero.jpg'

export default async function CareerHero() {
	return (
		<div className="md:container">
			<div className="relative h-[50vh] w-full overflow-hidden md:mt-3">
				<Image
					alt="Career Landing"
					src={CareerLanding}
					placeholder="blur"
					quality={30}
					fill
					className="object-cover brightness-75"
				/>
				<div className="text-white relative backdrop-blur-50">
					<div className="flex flex-col justify-center items-center mt-10 my-20  ">
						<h1 className="font-bold text-[50px] md:text-[100px]">Wario Careers</h1>
						<p className="text-[25px] md:text-[50px]">Make Your Work Life Better</p>
					</div>
				</div>
			</div>
		</div>
	)
}
