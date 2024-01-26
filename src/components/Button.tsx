import * as React from 'react'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors   disabled:opacity-50 disabled:pointer-events-none',
	{
		variants: {
			variant: {
				default: 'bg-blue-600 text-white hover:bg-blue-900',
				outline: 'bg-transparent border border-blue-200 hover:bg-blue-100'
			},
			size: {
				default: 'h-10 py-[7px] px-[23px] rounded-[0.80rem]',
				sm: 'h-9 px-2 rounded-md',
				lg: 'h-11 px-8 rounded-md'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, href, variant, size, ...props }, ref) => {
		if (href) {
			return (
				<Link href={href} className={cn(buttonVariants({ variant, size, className }))}>
					{children}
				</Link>
			)
		}
		return (
			<button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
				{children}
			</button>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
