import { getSingleJob } from '@/lib/jobs'
import FullJobEditorForm from '@/components/dashboard/poster/fullJobEditorForm'
export default async function JobEditor({ params }: { params: { id: string } }) {
	const getValue = await getSingleJob(params.id)
	return (
		<div>
			<div className="bg-slate-100 min-h-screen max-w-full md:w-screen">
				<div className="min-[320px]:p-0 sm:p-3 md:p-10 md:w-2/3">
					<h1 className="text-md md:text-lg font-semibold my-3 ">Editing: {getValue!.jobName}</h1>
					<div className="shadow-lg overflow-y-scroll max-h-[70vh]">
						<FullJobEditorForm
							id={getValue!.id}
							JobName={getValue!.jobName}
							JobDescription={getValue!.jobName}
							JobLocation={getValue!.jobName}
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
