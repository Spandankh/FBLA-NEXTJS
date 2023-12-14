'use client'

import React, { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import JobContentEditor from './components/jobContentEditor'
import HardBreak from '@tiptap/extension-hard-break'
import JobContentPreview from './components/jobContentPreview'

export default function JobPosterEditor() {
    const [descriptionContent, setDescriptionContent] = useState('')
    const [jobNameContent, setjobNameContent] = useState('')

    const editor = useEditor({
        editorProps: {
            attributes: {
                class: 'focus:outline-none',
            },
        },
        extensions: [
            StarterKit,
            HardBreak.extend({
                addKeyboardShortcuts() {
                    return {
                        Enter: () => this.editor.commands.setHardBreak(),
                    }
                },
            }),
        ],
        content: '<p>Hello World! 🌎️</p>',
        onUpdate({ editor }) {
            setDescriptionContent(editor.getHTML())
        },
    })

    return (
        <div className="bg-gray-100 min-h-full flex justify-between">
            <section className="w-1/2 mx-5 my-2">
                <h1 className="capitalize text-[#19224a] text-[40px] md:text-[54px] font-bold">
                    Job Editor
                </h1>
                <div>
                    <label className="mb-2 block text-gray-700 font-bold text">
                        Job Name
                    </label>
                    <input
                        className="box-content p-2.5 h-[8pvh] w-4/6 overflow-auto-scroll text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(event) => {
                            setjobNameContent(event.target.value)
                        }}
                    ></input>
                </div>
                <div className="border-solid border-blue-400">
                    <label className="text-gray-700 font-bold text-md">
                        Job Description
                    </label>
                    <JobContentEditor
                        description={''}
                        onChange={setDescriptionContent}
                    />
                </div>
            </section>
            <section className="w-1/2">
                <JobContentPreview
                    jobName={jobNameContent}
                    jobBody={descriptionContent}
                />
            </section>
        </div>
    )
}
