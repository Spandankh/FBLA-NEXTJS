import * as React from 'react'
import ContactForm from '@/components/contact/form'

export default function Contact() {
	return (
		<div className="h-screen bg-slate-50">
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
