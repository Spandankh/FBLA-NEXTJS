import { Briefcase, MapPin } from 'lucide-react'
import parse from 'html-react-parser'

export default function jobDescription(jobDescription: string) {
	return (
		<div>
			<div className="mx-2 my-2 shadow-1xl">
				<div className="flex pt-5">
					<div className="flex items-center mr-5">
						<Briefcase className="mr-2" />
						<div>
							<p>Role</p>
							<h1 className="font-bold text-lg">Full-Time</h1>
						</div>
					</div>
					<div className="flex items-center">
						<MapPin className="mr-2" />
						<div>
							<p>Location</p>
							<h1 className="font-bold text-lg">Manassas Park, VA</h1>
						</div>
					</div>
				</div>
				<div className=" text-base rounded-[1rem] mt-5 ">
					<h1 className="font-bold text-[20px] underline py-3">Job Description</h1>
					<div className="pb-5 text-lg">{parse(jobDescription)}</div>
				</div>
			</div>
		</div>
	)
}
