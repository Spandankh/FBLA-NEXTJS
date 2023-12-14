'use client'

import { type Editor } from '@tiptap/react'
import { Bold, Italic, List, Heading2 } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'
type Props = {
    editor: Editor | null
}
export function ToolBar({ editor }: Props) {
    if (!editor) {
        return null
    }
    return (
        <div className="box-content p-2.5 my-5 w-4/6 text-sm bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <Toggle aria-label="Toggle italic">
                <Bold className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                pressed={editor.isActive('heading')}
                onPressedChange={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
            >
                <Heading2 className="h-4 w-4"></Heading2>
            </Toggle>

            <Toggle
                size="sm"
                pressed={editor.isActive('bold')}
                onPressedChange={() =>
                    editor.chain().focus().toggleBold().run()
                }
            >
                <Bold className="h-4 w-4"></Bold>
            </Toggle>
        </div>
    )
}
