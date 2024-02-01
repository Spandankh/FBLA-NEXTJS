import { getSingleJob } from '@/lib/jobs'
import FullJobEditorForm from '@/components/dashboard/poster/fullJobEditorForm'
export default async function JobEditor({ params }: { params: { id: string } }) {
	const getValue = await getSingleJob(params.id)
	return (
		<div>
			<div className="min-h-screen max-w-full bg-slate-100 md:w-screen">
				<div className="min-[320px]:p-0 sm:p-3 md:w-2/3 md:p-10">
					<h1 className="text-md my-3 font-semibold md:text-lg ">Editing: {getValue!.jobName}</h1>
					<div className="max-h-[70vh] overflow-y-scroll shadow-lg">
						<FullJobEditorForm
							id={getValue!.id}
							JobName={getValue!.jobName}
							JobDescription={getValue!.jobDescription}
							JobLocation={getValue!.jobLocation}
							FullTime={getValue!.fullTime}
							RequireResume={getValue!.requireResume}
							questions={getValue!.questions.map((question) => ({
								question
							}))}
						></FullJobEditorForm>
					</div>
				</div>
			</div>
		</div>
	)
}
