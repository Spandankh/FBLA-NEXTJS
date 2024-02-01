import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import IntegritySvg from '../../../public/images/CoreValueInt.svg'
import TeamWork from '../../../public/images/CoreValueTeamWork.svg'
import Innovation from '../../../public/images/CoreValueInnovation.svg'

export default function CoreValue() {
	return (
		<div className="container mx-auto px-5 py-10">
			<div className="mt-6 grid gap-6 md:grid-cols-3">
				<Card className=" rounded-[15px] border-black  bg-gradient-to-r from-[#0096C7]  to-[#00B4D8]">
					<CardHeader>
						<CardTitle className=" text-[30px]  underline decoration-black underline-offset-2 ">
							Integrity
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-[20px] text-gray-800">
							Intergrity has played a massive role in forming the relationship we have with our clients
							since the start of the company.
						</p>
					</CardContent>
					<CardContent className="flex items-center justify-center pt-5">
						<Image src={IntegritySvg} width={250} alt="Integrity" />
					</CardContent>
				</Card>
				<Card className=" rounded-[15px] border-black bg-gradient-to-r from-[#00B4D8]  to-[#48CAE4]">
					<CardHeader>
						<CardTitle className="text-[30px] font-semibold text-black">Innovation</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-[20px] text-gray-800">
							At Wario, we are always working to find new ways to make sure our clients get the best
							possible training.
						</p>
					</CardContent>
					<CardContent className="flex w-full justify-center pt-5">
						<Image src={Innovation} width={250} height={250} alt="Innovation" className="object-cover" />
					</CardContent>
				</Card>
				<Card className=" max-w-prose rounded-[15px] border-black bg-gradient-to-br  from-[#48CAE4] to-[#90E0EF]">
					<CardHeader>
						<CardTitle className="text-[30px] font-semibold text-black">Collaboration</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-[20px] text-gray-800">
							At Wario, we embrace teamwork and cooperation to achieve goals and success.
						</p>
					</CardContent>
					<CardContent className="flex w-full justify-center pt-5">
						<Image src={TeamWork} width={250} height={250} alt="TeamWork" />
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
