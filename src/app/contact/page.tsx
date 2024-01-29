import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import ContactForm from '@/components/contact/form'

export default function Contact() {
	return (
		<div className="h-screen bg-slate-100">
			<div className="mx-5 pt-10">
				<ContactForm></ContactForm>
			</div>
			<div className="mx-auto max-w-prose pt-2">
				Location: <br></br>
				8200 Euclid Ave, <br></br>Manassas Park, VA 20111
			</div>
		</div>
	)
}
