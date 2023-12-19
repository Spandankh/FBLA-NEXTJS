'use client'

import React, { useState } from 'react'

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState('1')

    const timeline = [
        {
            id: '1',
            data: '2019',
            title: 'We Started the Company',
            body: 'More Random Text More Random Text More Random Text',
        },
        {
            id: '2',
            data: '2020',
            title: 'Product Launch',
            body: 'We introduced our latest product line to the market, showcasing innovative features that garnered attention from industry experts and customers alike.',
        },
        {
            id: '3',
            data: '2021',
            title: 'Expansion into New Markets',
            body: 'In this year, we expanded our operations into international markets, establishing strategic partnerships and reaching a broader customer base.',
        },
        {
            id: '4',
            data: '2022',
            title: 'Achieving Record Sales',
            body: 'A remarkable year for us as we achieved record-breaking sales figures, attributing our success to our dedicated team and continuous innovation.',
        },
    ]

    const handleTabChange = (e) => {
        setCurrentTab(e.target.id)
    }

    return (
        <div className="container px-10 py-10">
            <div className="flex flex-wrap justify-center">
                {timeline.map((tab, index) => (
                    <button
                        key={index}
                        id={tab.id}
                        onClick={handleTabChange}
                        className={`cursor-pointer ${
                            currentTab === tab.id
                                ? 'bg-blue-700 rounded-[1rem] text-white'
                                : 'hover:bg-gray-200'
                        }   hover:rounded-[1rem] font-semibold text-[20px] p-2 mr-5 mt-2 text-blue-700 disabled:bg-colorLinesLight max-w-[200px] text-center`}
                    >
                        {tab.data}
                    </button>
                ))}
            </div>
            <div>
                {timeline.map((tab, index) => (
                    <div key={index}>
                        {currentTab === `${tab.id}` && (
                            <div className="mt-4">
                                <p className="text-[#19224a]  text-[30px] pb-5 font-semibold">
                                    {tab.title}
                                </p>
                                <p className="text-[20px]  max-w-[400px] ">
                                    {tab.body}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tabs
