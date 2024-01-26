'use client'

import React, { useState } from 'react'

export default function History() {
	const [currentTab, setCurrentTab] = useState('1')

	const timeline = [
		{
			id: '1',
			data: '2019',
			title: 'We Started the Company',
			body: '5+ Personal Trainers came together and formed Wario, officaly starting its rich history.'
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
				<h1 className="text-[#19224a]  text-5xl font-bold p-5">Where We Came From</h1>
			</div>

			<div className="container flex justify-center items-center bg-white rounded-[2rem] shadow-2xl my-4 mx-auto">
				<div className="container px-10 py-10">
					<div className="flex flex-wrap justify-center">
						{timeline.map((tab, index) => (
							<button
								key={index}
								id={tab.id}
								onClick={() => setCurrentTab(tab.id)}
								className={`cursor-pointer ${
									currentTab === tab.id
										? 'bg-blue-700 rounded-[1rem] text-white'
										: 'hover:bg-gray-200'
								}   hover:rounded-[1rem] font-semibold text-[20px] p-2 mr-5 mt-2 text-blue-700  max-w-[200px] text-center`}
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
										<p className="text-[#19224a]  text-[30px] pb-5 font-semibold">{tab.title}</p>
										<p className="text-[20px]  max-w-[400px] ">{tab.body}</p>
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
