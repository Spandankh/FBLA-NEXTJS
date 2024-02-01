import FullJobEditorForm from '@/components/dashboard/poster/fullJobEditorForm'

export default async function Application() {
	return (
		<>
			<div className="min-h-screen max-w-full bg-slate-100 md:w-screen">
				<div className="min-[320px]:p-0 sm:p-3 md:w-2/3 md:p-10">
					<h1 className="text-md my-3 font-semibold md:text-lg ">Job Poster</h1>
					<div className="max-h-[70vh] overflow-y-scroll shadow-lg">
						<FullJobEditorForm
							JobName={''}
							JobDescription={''}
							JobLocation={''}
							FullTime={false}
							RequireResume={false}
							questions={[{ question: '' }]}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
