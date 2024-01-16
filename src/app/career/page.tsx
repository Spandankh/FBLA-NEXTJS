import React from 'react'
import JobBoard from '@/components/career/JobBoard'
import CareerHero from '@/components/career/CareerHero'

export default async function Career() {
    return (
        <div className="h-full">
            <CareerHero />
            <JobBoard />
        </div>
    )
}
