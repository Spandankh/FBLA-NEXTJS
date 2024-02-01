'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { CardContent } from '../ui/card'

export default function Review() {
	const WorkerReviews = [
		{
			name: 'John',
			image: 'https://xsgames.co/randomusers/assets/avatars/male/31.jpg',
			Description:
				'Had an amazing time! The work environment is friendly, and the team is supportive. Great place to grow professionally.'
		},
		{
			name: 'Alice',
			image: 'https://xsgames.co/randomusers/assets/avatars/female/18.jpg',
			Description:
				'Enjoyed my experience here. The company values work-life balance, and there are opportunities for skill development. Highly recommend!'
		},
		{
			name: 'David',
			image: 'https://xsgames.co/randomusers/assets/avatars/male/73.jpg',
			Description:
				"Fantastic workplace! The management is approachable, and there's a positive atmosphere. Proud to be part of such a dynamic team."
		},
		{
			name: 'Emily',
			image: 'https://xsgames.co/randomusers/assets/avatars/female/23.jpg',
			Description:
				"A wonderful work culture! Colleagues are collaborative, and the organization values employee well-being. It's been a fulfilling journey so far."
		}
	]
	return (
		<>
			<Carousel
				plugins={[
					Autoplay({
						delay: 3000
					})
				]}
			>
				<CarouselContent className="-ml-3 max-h-[300px] md:-ml-6">
					{WorkerReviews.map((reviews, index) => (
						<CarouselItem key={index} className="pl-3 md:basis-1/2 md:pl-6 lg:basis-1/3 ">
							<div className="max-h-[400px] rounded-[2rem] bg-white p-1">
								<CardContent className="flex min-h-[300px] flex-col items-center justify-center text-center">
									<div className="mb-2 flex text-2xl">
										<Avatar className="md:w-15 mr-3 h-12">
											<AvatarImage className="" src={reviews.image} />
										</Avatar>
										{reviews.name}
									</div>

									<span className="text-1xl max-w-prose">{reviews.Description}</span>
								</CardContent>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</>
	)
}
