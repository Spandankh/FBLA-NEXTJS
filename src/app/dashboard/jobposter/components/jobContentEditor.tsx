'use client'

import HardBreak from '@tiptap/extension-hard-break'
import { ToolBar } from './ToolBar'
import {
    EditorContent,
    EditorProvider,
    useCurrentEditor,
    useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

export default function TipTap({
    description,
    onChange,
}: {
    description: string
    onChange: (richText: string) => void
}) {
    const editor = useEditor({
        editorProps: {
            attributes: {
                class: 'box-content p-2.5 h-[50vh] w-4/6 overflow-y-scroll text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ',
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
            onChange(editor.getHTML())
        },
    })
    return (
        <div>
            <ToolBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}
