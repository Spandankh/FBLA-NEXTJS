import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import IntegritySvg from '../../../public/images/CoreValueInt.svg'
import TeamWork from '../../../public/images/CoreValueTeamWork.svg'
import Innovation from '../../../public/images/CoreValueInnovation.svg'

export default function CoreValue() {
	return (
		<div className="container px-5 py-10 mx-auto">
			<div className="grid md:grid-cols-3 gap-6 mt-6">
				<Card className=" bg-gradient-to-r from-[#0096C7]  to-[#00B4D8] border-black  rounded-[15px]">
					<CardHeader>
						<CardTitle className=" text-[30px]  underline underline-offset-2 decoration-black ">
							Integrity
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-[20px] text-gray-800">
							Intergrity has played a massive role in forming the relationship we have with our clients
							since the start of the company.
						</p>
					</CardContent>
					<CardContent className="flex justify-center pt-5 items-center">
						<Image src={IntegritySvg} width={250} alt="Integrity" />
					</CardContent>
				</Card>
				<Card className=" bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] border-black  rounded-[15px]">
					<CardHeader>
						<CardTitle className="text-black text-[30px] font-semibold">Innovation</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-[20px] text-gray-800">
							At Wariom, we are always working to find new ways to make sure our clients get the best
							possible training.
						</p>
					</CardContent>
					<CardContent className="w-full flex justify-center pt-5">
						<Image src={Innovation} width={250} height={250} alt="Innovation" className="object-cover" />
					</CardContent>
				</Card>
				<Card className=" bg-gradient-to-br from-[#48CAE4] to-[#90E0EF] border-black  rounded-[15px] max-w-prose">
					<CardHeader>
						<CardTitle className="text-black text-[30px] font-semibold">Collaboration</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-[20px] text-gray-800">
							At Wario, we embrace teamwork and cooperation to achieve goals and success.
						</p>
					</CardContent>
					<CardContent className="w-full flex justify-center pt-5">
						<Image src={TeamWork} width={250} height={250} alt="TeamWork" />
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
