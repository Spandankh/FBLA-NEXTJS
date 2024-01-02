'use client'
import parse from 'html-react-parser'

interface EditorProp {
    jobName: string
    jobLocation?: string
    jobBody: string
}

export default function RichTextPreview({ jobName, jobBody }: EditorProp) {
    return (
        <div className="  flex min-h-[150px] max-h-screen flex-col my-10 mx-10 border-r overflow-scroll overscroll-y-auto">
            <div className="bg-white px-2 py-2 rounded-[0.8rem]">
                <h1 className="mb-4 text-2xl text-gray-700 font-semibold">
                    {jobName}
                </h1>
                <h1 className="mb-4 text-lg text-gray-700 font-semibold min-h-[150px]">
                    <p className="font-bold underline text-1xl">
                        Job Description
                    </p>
                    {parse(jobBody)}
                </h1>
            </div>
        </div>
    )
}
