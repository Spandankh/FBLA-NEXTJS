'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import Autoplay from 'embla-carousel-autoplay'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import { CardContent } from '../ui/card'

export default function Review() {
    const WorkerReviews = [
        {
            name: 'John',
            image: 'https://xsgames.co/randomusers/assets/avatars/male/31.jpg',
            Description:
                'Had an amazing time! The work environment is friendly, and the team is supportive. Great place to grow professionally.',
        },
        {
            name: 'Alice',
            image: 'https://xsgames.co/randomusers/assets/avatars/female/18.jpg',
            Description:
                'Enjoyed my experience here. The company values work-life balance, and there are opportunities for skill development. Highly recommend!',
        },
        {
            name: 'David',
            image: 'https://xsgames.co/randomusers/assets/avatars/male/73.jpg',
            Description:
                "Fantastic workplace! The management is approachable, and there's a positive atmosphere. Proud to be part of such a dynamic team.",
        },
        {
            name: 'Emily',
            image: 'https://xsgames.co/randomusers/assets/avatars/female/23.jpg',
            Description:
                "A wonderful work culture! Colleagues are collaborative, and the organization values employee well-being. It's been a fulfilling journey so far.",
        },
    ]
    return (
        <>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
            >
                <CarouselContent className="-ml-3 md:-ml-6 max-h-[300px] w-full">
                    {WorkerReviews.map((reviews, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-3 md:pl-6 md:basis-1/2 lg:basis-1/3 "
                        >
                            <div className="p-1 bg-white rounded-[2rem] max-h-[400px]">
                                <CardContent className="flex items-center justify-center min-h-[300px] flex-col text-center">
                                    <div className="mb-2 text-2xl flex">
                                        <Avatar className="mr-3 w-15 h-12">
                                            <AvatarImage
                                                className=""
                                                src={reviews.image}
                                            />
                                        </Avatar>
                                        {reviews.name}
                                    </div>

                                    <span className="text-1xl max-w-prose">
                                        {reviews.Description}
                                    </span>
                                </CardContent>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    )
}
