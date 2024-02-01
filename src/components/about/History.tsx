'use client'

import React, { useState } from 'react'

export default function History() {
	const [currentTab, setCurrentTab] = useState('1')

	const timeline = [
		{
			id: '1',
			data: '2019',
			title: 'We Started the Company',
			body: '5 Personal Trainers came together and formed Wario, officaly starting its rich history.'
		},
		{
			id: '2',
			data: '2020',
			title: 'Growth',
			body: 'We started expanding into new cities and officaly reached 50 employees.'
		},
		{
			id: '3',
			data: '2021',
			title: 'Mobile App',
			body: 'In this year, we created a mobile app that lets our customers track their fitness progress resulting into a broader customer base.'
		},
		{
			id: '4',
			data: '2022',
			title: 'Achieving Record Sales',
			body: 'In 2023 we achieved record-breaking sales resulting from our dedicated team and continuous innovation.'
		}
	]
	return (
		<div className="bg-[#F3F3F3] py-10">
			<div className="text-center">
				<h1 className="p-5  text-5xl font-bold text-[#19224a]">Where We Came From</h1>
			</div>

			<div className="container mx-auto my-4 flex items-center justify-center rounded-[2rem] bg-white shadow-2xl">
				<div className="container px-10 py-10">
					<div className="flex flex-wrap justify-center">
						{timeline.map((tab, index) => (
							<button
								key={index}
								id={tab.id}
								onClick={() => setCurrentTab(tab.id)}
								className={`cursor-pointer ${
									currentTab === tab.id
										? 'rounded-[1rem] bg-blue-700 text-white'
										: 'hover:bg-gray-200'
								}   mr-5 mt-2 max-w-[200px] p-2 text-center text-[20px] font-semibold  text-blue-700 hover:rounded-[1rem]`}
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
										<p className="pb-5  text-[30px] font-semibold text-[#19224a]">{tab.title}</p>
										<p className="max-w-[400px]  text-[20px] ">{tab.body}</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
